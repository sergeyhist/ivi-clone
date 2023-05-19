/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["avatars.mds.yandex.net", "www.avatars.mds.yandex.net"],
  },
  env: {
    SERVER_HOST: "http://gachibass.online:4000",
  },
};

module.exports = nextConfig;
