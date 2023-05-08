/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["avatars.mds.yandex.net", "www.avatars.mds.yandex.net"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env:{
    REACT_APP_GOOGLE_AUTH_CLIENT_ID:"1048845826975-bf2oaake51l7n0s8mvp2sp2ci4rkb6kd.apps.googleusercontent.com",
    REACT_APP_VK_AUTH_CLIENT_ID:"51636014",
    SERVER_HOST:"http://85.237.34.125:4000"
  }
};

module.exports = nextConfig;
