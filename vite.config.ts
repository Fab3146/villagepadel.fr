import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/villagepadel.fr/",  // ✅ IMPORTANT pour que GitHub Pages trouve les fichiers
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
