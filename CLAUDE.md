@AGENTS.md

# Git Commits

- Keep commit messages short and clear (one line, imperative tone)
- No co-author lines, no mention of Claude or AI participation
- Each commit should cover one logical change

# Component & Style Rules

- Always reuse existing components from `components/` before creating new ones. Maximize component reuse to keep the codebase consistent and lean.
- Always use color variables defined in `globals.css` (e.g. `text-primary`, `text-gray-muted`) instead of raw hex values or arbitrary Tailwind colors.
