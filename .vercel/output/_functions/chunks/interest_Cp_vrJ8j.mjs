import { sql } from '@vercel/postgres';

const prerender = false;
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
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const interest_type = data.get("interest")?.trim() || null;
    const message = data.get("message")?.trim() || null;
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await ensureTable();
    await sql`
      INSERT INTO interest_submissions (name, email, interest_type, message)
      VALUES (${name}, ${email}, ${interest_type}, ${message})
    `;
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Interest form error:", err);
    return new Response(JSON.stringify({ error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
