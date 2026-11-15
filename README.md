# S R Thote & Associates website
React + Vite + Tailwind + lucide-react.

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Production build
    npm run build      # outputs dist/
    npm run preview    # test the build locally
Deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any static host (build command `npm run build`, output `dist`).

## Contact form
Validation is client-side only. To deliver messages, set `VITE_CONTACT_ENDPOINT` in `.env` to a URL that accepts a JSON POST (Formspree, EmailJS proxy, your own API), or edit `src/lib/submitContact.js`.

## Content
All text is in `src/data.js`. Add the Google Maps link in `firm.mapUrl` once the exact location is confirmed.

## Images
The logo, hero photo and Who We Serve photos from the approved design are already in `public/` (`logo.png`, `hero.jpg`, `serve-1.jpg` … `serve-4.jpg`). Replace any file with the same name to change it.
