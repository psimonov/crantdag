const { override, addLessLoader, overrideDevServer } = require('customize-cra');

const devServerConfig = () => (config) => {
  return {
    ...config,
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
    },
  };
};

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
    })
  ),
  devServer: overrideDevServer(
    devServerConfig()
  ),
};
