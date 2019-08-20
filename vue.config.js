module.exports = {
  proxy: {
    "/cate": {
      target: "https://resource.smartisan.com",
      pathRewrite: {
        "^/cate": ""
      }
    },
    "/home": {
      target: "https://www.smartisan.com",
      pathRewrite: {
        "^/home": ""
      }
    }
  }
}
