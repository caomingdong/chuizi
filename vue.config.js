module.exports = {
  devServer: {
    proxy: {
      "/cate": {
        target: "https://resource.smartisan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/cate": ""
        }
      }
    }
  }
  // 正向代理配置
};
