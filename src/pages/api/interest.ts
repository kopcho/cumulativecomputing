export const prerender = false;

import type { APIRoute } from 'astro';
import { sql } from '@vercel/postgres';
import dns from 'node:dns/promises';

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS interest_submissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      interest_type TEXT,
      message TEXT,
      submitted_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

async function verifyTurnstile(token: string, ip: string): Promise<{ ok: boolean; reason: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) return { ok: false, reason: 'secret-missing' };
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: secretKey, response: token, remoteip: ip }),
  });
  const data = await res.json() as { success: boolean; 'error-codes'?: string[] };
  if (data.success) return { ok: true, reason: 'ok' };
  return { ok: false, reason: (data['error-codes'] ?? ['unknown'])[0] };
}

async function emailDomainExists(email: string): Promise<boolean> {
  try {
    const domain = email.split('@')[1];
    if (!domain) return false;
    const records = await dns.resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const data = await request.formData();

    // Honeypot check — bots fill this field, humans don't
    const honeypot = data.get('website') as string;
    if (honeypot && honeypot.trim() !== '') {
      // Silently accept so bots don't know they were caught
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Turnstile human verification
    const turnstileToken = data.get('cf-turnstile-response') as string;
    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: 'human-check' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const turnstileResult = await verifyTurnstile(turnstileToken, clientAddress);
    if (!turnstileResult.ok) {
      return new Response(JSON.stringify({ error: `human-check: ${turnstileResult.reason}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Field validation
    const name = (data.get('name') as string)?.trim().slice(0, 200);
    const email = (data.get('email') as string)?.trim().toLowerCase().slice(0, 300);
    const interest_type = (data.get('interest') as string)?.trim() || null;
    const message = (data.get('message') as string)?.trim().slice(0, 2000) || null;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // MX record check — verify the email domain actually accepts mail
    const domainValid = await emailDomainExists(email);
    if (!domainValid) {
      return new Response(JSON.stringify({ error: 'Email domain does not appear to accept mail.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await ensureTable();

    await sql`
      INSERT INTO interest_submissions (name, email, interest_type, message)
      VALUES (${name}, ${email}, ${interest_type}, ${message})
    `;

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Interest form error:', err);
    return new Response(JSON.stringify({ error: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
