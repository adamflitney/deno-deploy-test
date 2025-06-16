# Basic Deno Deploy App (Crash after 60 seconds)

This is a minimal Deno app designed for Deno Deploy. It responds to HTTP requests and will crash after 60 seconds by calling `Deno.exit(1)`.

## How it works

- Responds with a greeting message until 60 seconds have passed.
- After 60 seconds, the app will crash and return a 500 error for all requests.

## Deploying to Deno Deploy

1. Push this repository to GitHub.
2. Go to [Deno Deploy](https://dash.deno.com/) and create a new project.
3. Link your GitHub repository and select `main.ts` as the entry point.

## Local Development

To run locally:

```sh
deno run --allow-net --allow-exit main.ts
```

## File structure

- `main.ts` — Main server file
- `.github/copilot-instructions.md` — Copilot instructions

---

This project is intentionally designed to crash after 60 seconds for demonstration purposes.
