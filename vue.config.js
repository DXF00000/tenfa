const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.tf2sc.cn/",
        changeOrigin: true,

      },
      "/static": {
        target: "https://www.tf2sc.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/static": ''

        }
      }
    }
  }
})
