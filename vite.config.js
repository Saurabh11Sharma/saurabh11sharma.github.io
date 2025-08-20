import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/saurabh11sharma.github.io/", // <-- add this line for GitHub Pages
});
