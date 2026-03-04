
# ProtoDesignAgency Portfolio

Production-ready Vite + React portfolio site for a UI/UX designer and prototyper agency.

## Development

1. Install dependencies:
`npm install`

2. Start local dev server:
`npm run dev`

## Production build

1. Build optimized assets:
`npm run build`

2. Preview production build locally:
`npm run preview`

## Deployment notes

- This is a single-page app (SPA). Configure your host to rewrite all unknown routes to `index.html`.
- Optional base path is supported for subdirectory deployments:
`VITE_BASE_PATH=/your-subpath/ npm run build`

## Routes

- `/`
- `/services`
- `/products`
- `/internship`
- `/research`
- `/contact`

Legacy path `/internee` automatically redirects to `/internship`.
  
