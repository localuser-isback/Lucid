import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), tailwind(), prefetch(), compress()],
  output: "server",
  adapter: node({
    mode: "middleware"
  })
});