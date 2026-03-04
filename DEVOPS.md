# Deployment & DevOps Notes

## CI

GitHub Actions runs on push and pull requests to `main`:
- `npm ci`
- `npm run build`

Workflow file: `.github/workflows/ci.yml`

## Runtime

This is a static Vite build served as SPA.

Ensure host rewrites unknown routes to `index.html`.

## Docker

Build image:
`docker build -t protodesignagency-portfolio .`

Run container:
`docker run -p 8080:80 protodesignagency-portfolio`

## Environments

Use `.env` files for runtime build-time variables.
Do not commit secrets; add safe examples to `.env.example`.

## Governance

Repository governance checklist: GOVERNANCE.md`n