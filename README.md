# next-render-lab

A tiny Next.js (App Router) project that shows **static vs dynamic rendering** side by side.

| Route | Rendering | Why |
|---|---|---|
| `/` | Static (built once) | Same content for everyone |
| `/blog` | Static (built once) | Content that rarely changes |
| `/dashboard` | Dynamic (per request) | Reads a cookie, so it is personalised |
| `/now` | Dynamic (per request) | Fetches fresh data with `cache: "no-store"` |

## Run it

```bash
npm install
npm run dev     # open http://localhost:3000
```

## See which pages are static vs dynamic

```bash
npm run build
```

Look at the route table. `○ (Static)` is prerendered once; `ƒ (Dynamic)` is server-rendered on each request.
