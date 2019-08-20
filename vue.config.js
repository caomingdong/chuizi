module.exports = {
  devServer: {
    proxy: {
      "/cate": {
        target: "https://resource.smartisan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/cate": ""
        }
<<<<<<< HEAD
      },
      "/skus": {
        target: "https://shopapi.smartisan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/skus": ""
        }
      }
    }
  }
  // 正向代理配置
}
=======
      }
    }
  }
};
>>>>>>> d246fc35f48e687abbdb124f3b7440d0f7e70e3f
