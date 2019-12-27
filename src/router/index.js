import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/News-List',
      name:'news-list',
      component:()=>import('../views/News/News-List.vue'),
      meta:{
        title:'新闻列表'
      }
    },
    {
      path:'/Home/News-Info/:id',
      name:'news-info',
      component:()=>import('../views/News/News-Info.vue'),
      meta:{
        title:'新闻详情'
      }
    },
    {
      path:'/Picture',
      component:()=>import('../views/Picture/Picture.vue'),
      meta:{
        title:'图片'
      },
    },
    {
      path:'/Home/Goods-List',
      component:()=>import('../views/Goods/Goods-List.vue'),
      meta:{
        title:'商品列表'
      }
    },
    {
      path:'/Home/Goods-Info/:id',
      component:()=>import('../views/Goods/Goods-Info.vue'),
      meta:{
        title:'商品详情'
      }
    },
    {
      path:'/Home/Image-Text',
      name:'ImageText',
      component:()=>import('../views/Goods/Image-Text.vue'),
      meta:{
        title:'图文介绍'
      }
    },
    {
      path:'/Car',
      component:()=>import('../views/Car/Car.vue'),
      meta:{
        title:'购物车'
      },
    },
    {
      path:'/Home/PicInfo',
      component:()=>import('../views/Picture/PicInfo.vue'),
      meta:{
        title:'图片详情'
      }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass:'mui-active'//覆盖默认的路由高亮，默认的类名叫 router-link-active
})
router.beforeEach((to,from,next)=>{
  console.log('全局前置守卫',to,from);
  
  if(from.name == null && !(sessionStorage.getItem('reload')) ){//首次进入
    sessionStorage.setItem('reload','yes')
  }
  document.title = to.meta.title
  next()
})
router.beforeResolve((to,from,next)=>{
  console.log('全局解析守卫');

  next()
  
})
router.afterEach((to,from)=>{
  console.log('全局后置钩子','\n','to',to,'\n','from',from);
})
export default router