module.exports = {
  devServer: {
    proxy: {
      '/cate': {
        target: 'https://resource.smartisan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/cate': ''
        }
      },
      '/skus': {
        target: 'https://shopapi.smartisan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/skus': ''
        }
      }
    }
  }
  // 正向代理配置
}
