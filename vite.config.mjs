import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import * as glob from "glob";

// const jsEntries = sync("src/js/*.js").reduce((entries, file) => {
//   const name = path.basename(file, ".js"); // Get filename without .js
//   entries[name] = path.resolve(__dirname, file);
//   return entries;
// }, {});

export default defineConfig({
  build: {
    outDir: "public", // Output compiled files to the public folder
    emptyOutDir: false, // Prevent Vite from deleting existing files in public
    rollupOptions: {
      input: glob.sync("src/js/*.js"), // Specify the JS entry point
      output: {
        entryFileNames: "js/[name].js", // Output JS as public/js/app.js
        chunkFileNames: "js/[name].js", // Output any additional JS chunks
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) {
            return "css/[name][extname]"; // Output CSS as public/css/app.css
          }
          return "assets/[name][extname]"; // Other assets go to public/assets
        },
      },
    },
  },
  plugins: [tailwindcss()],
});
