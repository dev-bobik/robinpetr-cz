import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Zpřístupní Cloudflare bindings/env při `next dev`.
initOpenNextCloudflareForDev();

export default nextConfig;
