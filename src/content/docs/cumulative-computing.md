---
title: Cumulative Computing
description: A computational paradigm in which systems accumulate work over time by preserving artifacts that represent completed computation.
---

## The Problem With Forgetting

Every time a computational system runs, it produces results.

Those results represent work: sometimes seconds of computation, sometimes hours, sometimes the accumulated effort of many systems running in parallel across distributed environments.

Then the process terminates.

And in most systems, the results disappear.

The next time the computation is needed, the work begins again.

This is not an accident. It is the default behavior of computing infrastructure designed to preserve **data**, not **computational work**.

Files store documents. Databases store application state. Object storage stores digital assets. None of these systems were designed to preserve the structure of computation itself.

The consequence is a computing paradigm built on forgetting.

---

## How Human Knowledge Solved This

Human civilization faced the same problem centuries ago.

Scholars produced knowledge. When those scholars died, their knowledge died with them, unless someone had written it down, preserved the document, and made it findable.

The solution was infrastructure.

Libraries preserved written work. Citation networks connected ideas across time. Peer review verified that prior work was what it claimed to be. Academic institutions created the incentives and mechanisms to keep knowledge alive and reusable.

The result was science, a cumulative system in which each generation builds on the work of prior generations rather than rediscovering what has already been found.

Newton described it precisely: *standing on the shoulders of giants*.

That phrase describes an infrastructure property, not a metaphor. It means prior work remained available, verifiable, and reusable. It means the computational work of prior thinkers was not lost.

Human knowledge became cumulative because humans built infrastructure to make it so.

Machine computation has not.

---

## The Machine That Forgets

Modern computational systems are extraordinary engines of work.

They analyze, synthesize, transform, and reason at scales no human could match.

But they are, by default, **stateless execution engines**. They run, produce output, and forget.

A data pipeline runs and produces results. Those results are stored somewhere: a file, a database record, an object in cloud storage. But the relationship between the result and the computation that produced it is not preserved. The lineage is lost. The derivation graph disappears.

When the pipeline needs to run again, it runs again from scratch.

An autonomous agent performs analysis, produces a structured result, and terminates. Another agent performing related work hours later has no way to know that the prior analysis exists. It performs the same analysis again.

AI systems train on data, produce models, and generate outputs. But the outputs of one run rarely become the verified, addressable, reusable inputs to the next. Each run begins where the last one began.

This is recomputation: the repeated destruction and recreation of computational work that has already been performed.

In small systems, recomputation is a minor inefficiency. In large distributed ecosystems of autonomous agents continuously performing complex computation, recomputation is a fundamental architectural failure.

The machine forgets because the infrastructure does not preserve what the machine has done.

---

## Cumulative Computing

There is a better model.

**Cumulative Computing** is a paradigm in which computational systems accumulate work over time by preserving artifacts that represent completed computation, allowing future computation to build upon prior work rather than repeating it.

In cumulative computing systems:

- computation produces **artifacts** representing completed work
- artifacts form **artifact graphs** capturing the structure of that work
- artifact graphs persist across agents, workflows, and time
- future computation extends prior artifact graphs rather than recreating them

The result is a system that compounds.

Each new computation adds to the accumulated structure of prior work. Each new artifact becomes a node in a growing graph of verified, reusable results. The system does not merely perform work. It **accumulates** work.

This is the same property that makes science powerful. Each experiment adds to the accumulated body of prior experiments. Each paper adds to the citation network of prior papers. Knowledge compounds because the infrastructure preserves the work.

Cumulative Computing proposes the same infrastructure for machines.

---

## The Core Invariant

Cumulative Computing rests on a single invariant:

> **Computational work persists only through the artifacts produced by that work.**

This invariant has a sharp consequence.

If artifacts are not preserved, computational work disappears. It does not slow down. It does not degrade. It simply ceases to exist the moment the process that produced it terminates.

There is no partial preservation. Either the artifact persists and the work it represents persists with it, or the artifact disappears and the work must be performed again.

This makes artifact preservation not a storage optimization but a **conservation requirement**, analogous to conservation laws in physical systems. Work performed cannot be recovered without either preserving it through artifacts or performing it again.

Systems that preserve artifacts conserve computational work.

Systems that lose artifacts destroy it.

---

## What Becomes Possible

When computational systems accumulate work rather than repeatedly destroying and recreating it, new properties emerge.

**Compounding efficiency.** Work performed once does not need to be performed again. As artifact graphs grow, the proportion of computation that builds on prior results increases. Systems become more efficient as they accumulate history.

**Collaborative ecosystems.** Independent agents can contribute to a shared artifact graph. Work performed by one system becomes available to others. Ecosystems of agents begin to behave less like isolated processes and more like collaborative systems extending a shared body of computational work. As artifact graphs grow, their value compounds: each new artifact can build on thousands of prior artifacts, and the usefulness of the graph increases as more work accumulates within it.

**Verifiable lineage.** When artifacts carry deterministic identities derived from the computations that produced them, the entire derivation history of any result becomes verifiable. Systems can confirm not just what a result is, but how it was produced and what prior work it depends on.

**Compound intelligence.** AI systems operating within cumulative computing infrastructure do not start from scratch with each run. They inherit the accumulated artifact graph of prior computation. Each new analysis extends rather than replaces prior analysis. The system becomes, in a meaningful sense, smarter with use.

These properties do not emerge from better algorithms or faster hardware. They emerge from infrastructure, the same way scientific progress did not emerge from smarter individuals but from the infrastructure that preserved and connected their work.

---

## The Infrastructure Required

Cumulative Computing requires infrastructure that traditional storage systems do not provide.

Files, databases, and object storage preserve data objects. They do not preserve the structural relationships between computational results. They do not maintain artifact identity across distributed systems. They do not track derivation lineage or support cross-agent artifact reuse.

Orchestration systems coordinate execution but do not preserve outputs. The artifacts produced within an orchestrated workflow require the same artifact availability infrastructure as those produced outside one.

A new infrastructure layer is required, one designed specifically to preserve artifacts and the relationships between them.

**Agent Artifact Availability (AAA)** defines the reliability property that such infrastructure must satisfy.

A system satisfies AAA when artifacts produced within it remain:

- **Retrievable** — accessible through a stable identifier independent of the producing environment
- **Verifiable** — validatable as identical to the original computational output
- **Reusable** — consumable by other agents or workflows without recomputation
- **Persistent** — available even when the originating process is no longer active

AAA is to Cumulative Computing what the DOI system is to scientific literature: the reliability property that makes artifacts findable, verifiable, and reusable regardless of where or how they were produced.

---

## The Shift

Computing infrastructure evolved to preserve data because data was what computing systems produced for human consumption.

Autonomous computational systems produce something different. They produce artifacts representing completed computational work consumed not by humans but by other computational systems.

Preserving that work requires different infrastructure.

The shift from data preservation to work preservation is not a minor optimization. It is a fundamental change in what computing infrastructure is for.

Traditional infrastructure preserves data.

Cumulative Computing infrastructure preserves work.

When artifacts remain retrievable, verifiable, reusable, and persistent, computational systems gain the ability not merely to perform work, but to accumulate it.

That is the paradigm.

That is Cumulative Computing.

---

**Author:** Rich Kopcho
**Date:** March 2026

Released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

---

*The technical foundation for this idea is developed in the [Agent Artifact Availability (AAA) series](https://github.com/kopcho/AAA), which describes artifacts as units of computational work, artifact graphs as the structure of that work, and the infrastructure required to preserve it.*
