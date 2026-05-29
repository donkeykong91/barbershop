# Barbershop

Next.js 16 / React 19 app for **The Barber Shop**.

## Scaffold choice

Started from the official `create-next-app@latest` App Router + TypeScript + Tailwind template instead of an aging third-party dashboard template. GitHub search showed the older shadcn Next template is deprecated; the cleanest v1 base is official Next.js plus project-specific route groups and components.

## App surfaces

- `/` public hosted booking page
- `/book` mobile-first guest booking flow
- `/appointment/[token]` secure customer appointment link scaffold
- `/dashboard` barber/owner dashboard shell

## Run

```bash
npm run dev
```

## Verify

```bash
npm run lint
npm run build
```
