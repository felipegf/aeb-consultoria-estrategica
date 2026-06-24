/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/solucoes",
        destination: "/para-quem-atendemos",
        permanent: true,
      },
      {
        source: "/solucoes/:slug*",
        destination: "/para-quem-atendemos/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
