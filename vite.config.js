import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/07-tic-tac-toe-starting-project/",
  plugins: [react()],
});
