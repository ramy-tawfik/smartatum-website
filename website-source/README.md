# Smart Atum homepage source

Run `npm ci` then `npm run build` from this directory. The build copies only the homepage and generated JS/CSS/font assets to the repository root. Game artwork is served from `/assets/`.

Never delete or change `app-ads.txt`, `.assetsignore`, privacy/deletion pages, beta/claim pages, or hosting configuration when rebuilding the homepage. No hosting migration or SPA catch-all is required. The existing domain and ad crawler paths remain unchanged.
