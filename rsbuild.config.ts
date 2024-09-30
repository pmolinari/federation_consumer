import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

// PROD - VERCEL
export default defineConfig({
  plugins: [pluginReact()],
  output: {},
  server: {
    port: 2000,
  },
  dev: {
    writeToDisk: true,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "federation_consumer",
          remotes: {
            federation_provider: process.env.FEDERATION_PROVIDER_URL || "",
          },
          shared: ["react", "react-dom"],
        }),
      ],
    },
  },
});
