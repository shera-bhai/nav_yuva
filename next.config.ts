import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ['ik.imagekit.io'], // <-- Add your image domain here
  },
};

export default withFlowbiteReact(nextConfig);