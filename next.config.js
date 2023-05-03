/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["avatars.mds.yandex.net", "www.avatars.mds.yandex.net"],
  },
};

module.exports = nextConfig;
