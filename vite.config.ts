import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths: the same build is served from /mateusz-ozog/ (GitHub Pages)
  // and /mateusz/ (Cloudflare, ozogowie.pl). Safe because the app has no router.
  base: './',
  legacy: {
    // Vite 8 resolves a default import of a CommonJS module to the whole `exports`
    // object in a "type": "module" package. @mui/icons-material v5 deep imports
    // (e.g. '@mui/icons-material/GitHub') and react-multi-carousel are CommonJS with
    // `exports.default`, so without this they render as "Element type is invalid".
    // Can be removed once those packages ship ESM entry points.
    inconsistentCjsInterop: true,
  },
});
