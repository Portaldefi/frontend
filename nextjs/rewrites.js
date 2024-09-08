async function rewrites() {
  return [
    { source: "/node-api/proxy/:slug*", destination: "/api/proxy" },
    { source: "/node-api/:slug*", destination: "/api/:slug*" },
    {
      source: "/api/:path*",
      destination: "http://147.28.187.45:8080/api/:path*",
    },
  ].filter(Boolean);
}

module.exports = rewrites;
