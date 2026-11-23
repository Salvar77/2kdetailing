/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/blog/czyszczenie-samochodu-wnetrza-opole',
        destination: '/blog/czyszczenie-wnetrza-samochodu-opole',
        permanent: true,
      },
      {
        source: "/oferta/regeneracja-reflektorow",
        destination: "/oferta/polerowanie-reflektorow",
        permanent: true,
      },
      {
        source: "/galeria/regeneracja-reflektorow",
        destination: "/galeria/polerowanie-reflektorow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
