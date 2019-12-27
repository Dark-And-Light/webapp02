# 仿制webApp
## 首页
    1.轮播图使用的element-ui中的el-carousel
    2.九宫图导航，使用的是mui中个grid。功能完成有：新闻、图片、商品
    3.tabbar使用的是mui中的tabar 其中Car的图片需要引入图标扩展以及字体扩展，因api目前只实现了Car和主页功能
## 新闻
    1.新闻列表使用的是mui
    2.新闻详情
## 商品
    1.商品列表。使用的是elementUI中的InfiniteScroll 无限滚动无限滚动组件（禁用加载）以及load
    2.商品详情。功能加入购物车
    3.商品图文详情
## 图片
    1.顶部滑动信息使用的是mui-scroll-wrapper需在页面加载完毕是初始化一下不然会出现滑动不了的状态，滑动初始化无效了(有时有效有时无效)，选择让页面加载时刷新一次(解决)
    2.图片lazy使用的是mint-ui
    3.图片详情 缩略图使用的是vue-preview
## 评论子页面
    发表评论、查看评论
















# UI
- emelent
- mui
- mint-ui
# 关于mui中tab-top-webview-main中报错'caller', 'calle', and 'arguments' properties may not be...问题除了直接解除全部的严格模式外，新的解决办法在.babel中配置忽略，这样解决的话不会让全部的严格模式解除
# 关于element中的infiniteScroll不滚动也触发原因必须设置高度以及溢出滚动否则会无限触发

## 当car为空新增数据时会发生徽标数量不更新的情况，必须刷新一次页面才能保证徽标数量的更新。响应式的数据更新并没有效果同过splice删除在添加才触发了更新 vue.set还是有问题
## 关于打包报错Error: postcss-svgo: Error in parsing SVG: Unquoted attribute value 无法解析svg 
    - 解决办法是将引入的外部文件中关于SVG用双引号引起来
    - 我把 "data:image/svg+xml;charset=utf-8,\"<svg. viewBox .......></svg>\"用双引号包起来也不行， 然后把 <svg> </svg> 用双引号包起来就行了  注意用反斜杠转义双引号 
##  vue-preview缩略图

## assets用来放置样式、静态图片，只要src下面的组件中用到的资源就放在assets中。static用来放没有npm包的第三方插件，字体文件。assets与components同级 components下的.vue引用静态文件时，相对路径为 ../assets/wapFront
## axios 不设置axios.defaults.headers.post['Content-Type'] ='' POST请求就能成功 原因不清楚
## 导入时间格式化插件moment
## babel.config.js中同时按需引入element-ui和mint-ui怎么配置都报错 所以mint-ui暂时使用完整引入
## 引入多个ui需要给第二个开始的Ui加上一个名字 例如["component", {"libraryName": "mint-ui", "style": true}, "mint-ui" ]
## 忽略一个注册为 ‘passive’ 的监听器的事件类型为 ‘touchstart’ 的 ‘preventDefault()’ 调用。


