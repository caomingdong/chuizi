module.exports = {
  proxy: {
    "/cate": {
      target: "https://resource.smartisan.com",
      pathRewrite: {
        "^/cate": ""
      }
    }
  }
}
