/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiBaseUrl: "http://127.0.0.1:1337",
    strapiAPIBaseUrl: "http://127.0.0.1:1337/api/",
    authToken:
      "5bd8945f8b65b2d37b7c953aa19ddc8f717e2af79e1877181ebe46f2b32d806510fe9277f566bd569cea9173a11abd4bf3be32de949388733caebdf5c0df267842163f4fe6fdc01936b51b5fc5097cfc5de056be1b35862dc7458bc7ab14d4229b94406e88beefb7596ca238fcf41f543b8aac9e613c439beb30d812b2c04dcb",
  },
};

module.exports = nextConfig;
