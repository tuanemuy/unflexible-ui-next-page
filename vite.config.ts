import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import linaria from "@linaria/rollup";

export default defineConfig({
  plugins: [
    linaria({
      include: ["src/**/*.{ts,tsx}"],
      sourceMap: process.env.NODE_ENV !== "production",
      babelOptions: {
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
          "@babel/preset-typescript",
          "@babel/preset-react",
        ],
      },
    }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UnflexibleUINextPage",
      formats: ["es", "umd"],
      fileName: (format) => `unflexible-ui-next-page.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "next"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "next/head": "Head",
        },
      },
    },
  },
});
