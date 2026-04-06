---
name: refactor
description: Analyze pages and components for DRY/SRP violations and code duplication, then extract reusable components with props to eliminate repetitiveness
argument-hint: [file, directory, or leave blank to scan all]
allowed-tools: Read Grep Glob Edit Write Bash
---

# Refactor: DRY & SRP Analysis

Perform a structured refactoring pass on this codebase (or `$ARGUMENTS` if specified).

## Step 1 — Scan for duplication

Search across `app/` and `components/` for:

- **Repeated JSX patterns** — identical or near-identical markup blocks appearing in 2+ files
- **Repeated logic** — the same conditional, mapping, or transformation written multiple times
- **Repeated style combinations** — the same Tailwind class groups (3+ classes) applied in multiple places
- **Repeated prop drilling** — the same set of props threaded through multiple layers

Use Grep and Read to collect evidence before drawing conclusions. Do not guess — quote exact lines.

## Step 2 — Check SRP violations

A component violates SRP if it does more than one of:
- Fetches / transforms data
- Manages complex local state
- Renders significantly different UI depending on a flag or role
- Contains more than ~150 lines

Flag each violation and name the responsibilities that should be split.

## Step 3 — Plan extractions

For each duplication or SRP issue found, propose:

1. The new component name (PascalCase, placed in `components/`)
2. Its props interface (TypeScript, with clear types)
3. Which files it replaces and how the call site changes

Present the plan clearly before touching any file. Wait for confirmation if the changes are large (3+ new components or edits to 5+ files). For small, obvious extractions you may proceed directly.

## Step 4 — Execute

- Create new components in `components/` using the existing file naming convention
- Replace all duplicated instances — do not leave orphaned copies
- Keep components focused: if a new component grows beyond ~100 lines, consider splitting further
- Always use color variables from `globals.css` (e.g. `text-primary`, `text-gray-muted`) — never raw hex or arbitrary Tailwind colors
- Reuse existing components from `components/` before creating new ones

## Step 5 — Verify

After changes:
- Confirm every replaced call site compiles (check with `mcp__ide__getDiagnostics` if available, or note any TS errors)
- Confirm no dead code remains from the extraction
- Confirm the new component is generic enough to cover all use cases it replaced

## Output format

Summarize findings as:

```
DUPLICATIONS FOUND
- [pattern name]: found in [file:line, file:line, ...]
  → Extract as: <ComponentName props="..." />

SRP VIOLATIONS
- [ComponentName] (file): does X and Y
  → Split into: <ComponentA /> + <ComponentB />

ACTIONS TAKEN
- Created components/Foo.tsx
- Updated app/page.tsx, components/Bar.tsx
```
