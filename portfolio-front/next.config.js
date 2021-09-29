const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['127.0.0.1']
  }
}

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
  }
}


