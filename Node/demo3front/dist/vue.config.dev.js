"use strict";

module.exports = {
  devServer: {
    port: 8080,
    headers: {
      'X-foo': '112233'
    },
    inline: true,
    overlay: true,
    stats: 'errors-only',
    proxy: {
      '/regLogin': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
};