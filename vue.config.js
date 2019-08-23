module.exports = {
  devServer: {
    proxy: {
      "/cate": {
        target: "https://resource.smartisan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/cate": ""
        }
      },
      '^/sku': {
        target: 'https://shopapi.smartisan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/sku': ""
        }
      }
    }
  }
};
