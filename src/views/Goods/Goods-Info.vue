<template>
    <div class="goods-info">
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :lbt="lbt" :isfull="false"></swipe>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <!-- 页眉 -->
            <div class="mui-card-header">
                {{goodsInfo.title}}
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span class="old">市场价：<del>￥{{goodsInfo.market_price}}</del></span>
                        <span class="now">销售价：<strong>￥{{goodsInfo.sell_price}}</strong></span>
                    </p>
                    <!-- 商品数量 -->
                    <div class="numBox">
                        <span>购买数量：</span>
                        <numberBox @getCount="getCount"
                        :quantity="goodsInfo.stock_quantity"></numberBox>
                    </div>
                    <!-- 按钮 -->
                    <div class="but">
                        <mt-button size="small" type="primary">立即购买</mt-button>
                        <mt-button size="small" type="danger" @click="addToCar(goodsInfo)">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsInfo.add_time|time('YYYY-MM-DD HH:mm:ss')}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button 
                type="primary" 
                size="large" 
                plain
                @click="goToImageText(goodsInfo.id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品介绍</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swipe from '../../components/swipe'
import numberBox from '../../components/goodsInfo-numberBox'
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            id:this.$route.params.id,//将路由参数上的ID挂载到data上，方便后期调用
            lbt:[],//轮播图数据
            goodsInfo:{},//商品详情
            num:1
        }
    },
    created() {
        this.getLbt();
        this.getGoodsInfo();
    },
    methods: {
        getLbt(){//获取轮播图数据
            this.axios.get('api/getthumimages/'+this.id).then(res=>{
                if(res.data.status === 0){
                    res.data.message.forEach(element => {
                        element.img = element.src;
                    });
                    this.lbt = res.data.message;
                }
            })
        },
        getGoodsInfo(){//获取商品详情
            this.axios.get('api/goods/getinfo/'+this.id).then(res=>{
                if(res.data.status === 0){
                    this.goodsInfo = res.data.message[0];
                }
                
            })
        },
        getCount(num){
            console.log('子组件传递过来的值',num);
            this.num = num;
        },
        goToImageText(id){//编程式导航去到图文介绍页
            this.$router.push({ path: '/Home/Image-Text', query: { id }})
        },
        addToCar(data){
        //   console.log(this.$store);
          this.$store.dispatch('addToCar',{data,num:parseInt(this.num)})
        }
    },
    components:{
        swipe,
        numberBox
    }
}
</script>
<style lang="less" scoped>
.goods-info{
    background: #eee;
    overflow: hidden;
    width: 100%;
    .price{
        color: #000;
        .now{  
            margin-left: 6px;
            strong{
                color: red;
            }
        }
    }
    .numBox{
        display: flex;
        color: #8f8f94;
        align-items: center;
        margin-bottom: 10px;
    }
    .but{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 10px;
        color: #8f8f94;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }
}  
</style>