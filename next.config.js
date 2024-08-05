/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
};

export default config;
