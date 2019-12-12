module.exports = {
  publicPath: '/',
  runtimeCompiler: true,// 是否使用包含运行时编译器的 Vue 构建版本
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    // 修复HMR
      config.resolve.symlinks(true);
  },
  devServer:{
    open: true, //配置自动启动浏览器
    // proxy:{
    //   "api":{
    //     target:'http://www.liulongbin.top:3005',
    //     // ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  
}