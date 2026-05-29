import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Example: If you are running Statamic locally on localhost
        protocol: "http",
        // Get hostname from env
        hostname: process.env.STATAMIC_URL || "",
        port: "",
        pathname: "/assets/**", // Restricts optimization strictly to the assets folder
      },
    ],
  },
};

export default nextConfig;
