import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow viewing the dev server from other devices on the LAN (e.g. your phone),
  // so client JS hydrates and interactions work off-localhost.
  allowedDevOrigins: ["192.168.1.16", "localhost"],
};

export default nextConfig;
