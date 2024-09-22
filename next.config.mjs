// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'simplexgroup.net'],
  },
};

export default withPlaiceholder(nextConfig);
