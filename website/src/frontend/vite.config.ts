import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import mkcert from 'vite-plugin-mkcert'; // Used to enable https on localhost (this is apparently a problem, why?); put "mkcert()" as a plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
