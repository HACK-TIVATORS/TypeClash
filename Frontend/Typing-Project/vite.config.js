import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
       // proxy any /api or /users or /login call to your backend
        
       "/users" : {
          target: "http://localhost:8081",
          changeOrigin: true,
       },
        "/login" : {
            target: "http://localhost:8081",
            changeOrigin: true,
        },
    }
  }
});
