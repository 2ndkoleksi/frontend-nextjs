const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const withImages = require('next-images');
const withFonts = require('next-fonts');


const nextConfig = {
  useFileSystemPublicRoutes: false
};

const offlineConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /[.](png|jpg|ico|css)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'important-images',
          cacheableResponse: {
            statuses: [0, 200]
          },
          expiration: {
            maxEntries: 10
          }
        }
      }
    ]
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL
  }
};

module.exports = withPlugins(
  [withImages, withFonts, [withOffline, offlineConfig]],
  nextConfig
);
