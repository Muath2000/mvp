# CyberAjeer — Replit Monorepo Starter

This is the monorepo scaffold for CyberAjeer, a modular cybersecurity freelancer marketplace. It includes:

## 🧱 Structure

- `apps/` — Frontend portals (React/Next.js)
- `domains/` — Backend logic for each feature (Express)
- `database/` — ORM schema and seeders (Drizzle)
- `server/` — Express server entrypoint
- `scripts/` — Utility scripts
- `.replit` — Replit configuration

## 🚀 Getting Started (on Replit or locally)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the backend API server:
   ```bash
   npm run start:backend
   ```

3. Start developing frontend in `apps/client-portal/pages`

## 📦 Features

- Modular folders for `projects`, `proposals`, `disputes`, etc.
- Express routes for each module under `/api/<module>`
- React frontend placeholders for client UI
- Seeders for mocking data
- TypeScript + Turbo + Drizzle ORM

## 🧪 Testing

- `tests/unit` — for controller/model unit tests
- `tests/e2e` — for API tests

## 🐳 Docker (Replit Compatible)

```Dockerfile
FROM node:18

WORKDIR /app
COPY . .

RUN npm install -g ts-node typescript && npm install
EXPOSE 3000

CMD ["npm", "run", "start:backend"]
```

---

Built for extensibility, role-based access, and secure modular design.
