# Architecture

## Current MVP

The current PureFlow Verified Impact System is a mock-data Next.js application.

```text
Next.js App Router
├── app/                 # Pages and route segments
├── components/          # Reusable UI primitives
├── lib/mock-data.ts     # All demo data and future tab/folder names
├── docs/                # Implementation and backend planning notes
└── Tailwind CSS         # Styling and responsive layout
```

## Design principles

- Keep the prototype fast, simple, and Vercel-ready.
- Keep all data mock-based until the Google Workspace backend is approved.
- Model records in a way that can later map to Google Sheets rows.
- Model evidence status in a way that can later map to Google Drive files and folders.
- Avoid dependencies that are unnecessary for a funder-demo prototype.

## Runtime

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build for Vercel.
- No environment variables are required.

## Future integration boundary

The future backend should be added behind a small data-access layer so pages can switch from mock arrays to Apps Script API responses without redesigning the interface.
