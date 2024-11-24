import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Handle .js files as JSX
    include: /src\/.*\.(js|jsx)$/, // Apply to .js and .jsx files
  },
});
