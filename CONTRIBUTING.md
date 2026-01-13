
---

## 🧱 2. Commit Message Format

This repository follows **Conventional Commits**.

| Prefix | When to Use | Example |
|------|------------|--------|
| `feat:` | New feature | `feat: add workflow builder API` |
| `fix:` | Bug fix | `fix: resolve Prisma migration error` |
| `refactor:` | Internal change | `refactor: simplify auth middleware` |
| `docs:` | Documentation | `docs: update env setup guide` |
| `test:` | Tests | `test: add Playwright coverage for login` |
| `chore:` | Non-functional | `chore: upgrade dependencies` |

---

## 🧠 3. Pull Request Requirements

All pull requests must:

- Be opened from a non-`main` branch
- Clearly describe the change
- Reference related issues (if applicable)
- Pass all CI checks
- Avoid unrelated refactors or formatting noise

---

## ✅ 4. Pre-Merge Checklist

Before merging into `main` or a `*-stable` branch, ensure:

- `npm install` completes without errors
- Prisma migrations apply cleanly
- `npx tsc --noEmit` reports no errors
- `npm run test` passes
- `npm run test:e2e` passes
- No secrets or credentials are committed
- Documentation is updated if behavior changed

---

## 🔐 5. Security & Secrets

- Never commit `.env` or `.env.local`
- Keep examples in `.env.example`
- Rotate credentials immediately if leaked
- Use encryption utilities (`crypto.ts`) for sensitive values
- Run `npm audit` after dependency updates

---

## 📘 6. Documentation Expectations

- Operational docs live under `docs/`
- Historical materials are archived under `docs/archive/`
- Deprecated systems are documented under `docs/deprecated/`
- Documentation should reflect **current behavior only**

---

## 🧩 7. Release & Versioning

Releases are intentionally simple and explicit:

1. Version changes are made via PR
2. PR is reviewed and merged
3. A tag (`vX.Y.Z`) is created after merge
4. GitHub Release notes are published manually or via a dedicated workflow

No background automation mutates release state.

---

## 👥 8. Contributors

- **Gary G. Bayes** — Project Owner & Architect  
- Additional contributors are credited via Git history

---

_End of Document_
