const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: true,
      },
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
