import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Example: If you are running Statamic locally on localhost
        protocol: "http",
        // Get hostname from env
        hostname: "stonehaus-cms.test",
        port: "",
        pathname: "/assets/**", // Restricts optimization strictly to the assets folder
      },
    ],
  },
};

export default nextConfig;
