import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    include: ["src/test/*"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    globals: true, // --> 0.8.1+  请修改成globals
    environment: "jsdom",
  },
});
