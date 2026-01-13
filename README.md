# Work Assistant — Workflow Hub for Remote Professionals

## 🧭 Overview

**Work Assistant** is a Next.js 13+ TypeScript platform that serves as a workflow hub for remote professionals.
It brings together automation, integrations, and productivity tooling into a single, secure dashboard.

The application is designed to be:
- Modular
- Automation-friendly
- Safe for incremental adoption
- Compatible with external GitHub Apps (e.g., Task Assistant)

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|------|-----------|---------|
| Frontend | React + Next.js 13+ | Modern, server-first UI |
| Styling | Tailwind CSS v4 | Utility-first responsive design |
| Backend | Next.js API Routes | Secure API layer |
| Database | PostgreSQL + Prisma ORM | Typed schema, migrations, seeding |
| Authentication | NextAuth.js | Credential + OAuth login |
| Encryption | AES-256 (`crypto.ts`) | Protects user API keys |
| Testing | Vitest + Playwright | Integration + E2E coverage |
| CI/CD | GitHub Actions | Build, test, and quality checks |

---

## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/automated-assistant-systems/work-assistant.git
cd work-assistant
Install Dependencies
npm install

3. Configure Environment Variables

Copy the example file and edit values as needed:

cp .env.example .env


Your .env should include:

DATABASE_URL="postgresql://user:password@localhost:5432/work_assistant?schema=public"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
ENCRYPTION_KEY="your-32-character-base64-key"

4. Initialize the Database
npx prisma migrate deploy
npx prisma db seed

5. Run the App
npm run dev


Visit: http://localhost:3000

🧪 Testing
Type	Command	Description
Integration	npm run test	API + unit validation
End-to-End	npm run test:e2e	Browser workflows
DB Inspection	npx prisma studio	View database tables

Playwright tests require the app to be running locally on localhost:3000.

🔄 CI/CD

The primary workflow at:

.github/workflows/ci-pipeline.yml


Performs the following on push or pull request:

Installs dependencies

Spins up PostgreSQL

Runs Prisma generate + migrations

Executes Vitest tests

Runs Playwright E2E tests

Uploads artifacts on failure

CI is read-only with respect to GitHub issues, PRs, and project state.

📚 Documentation

Active documentation lives in the docs/ directory.

Environment setup

Validation checklists

Branch protection policies

Historical and deprecated materials are clearly marked and archived.

👤 Maintainer

Gary G. Bayes
Project Owner & Lead Architect
📧 garybayes@github.io

📜 License

This project is licensed under the MIT License.
See the LICENSE file for details.

