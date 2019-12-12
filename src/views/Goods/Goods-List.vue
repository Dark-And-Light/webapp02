<template>
    <div class="goods-list">
        <!-- 使用的是elementUI中的InfiniteScroll 无限滚动无限滚动组件（禁用加载） -->
        <div class="infinite-list-wrapper" style="overflow:auto">
        <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <router-link v-for="item in goodsList" :key="item.id" class="list-item" tag="li" :to="'/Home/Goods-Info/'+item.id">
            <img :src="item.img_url" alt="">
            <h2 class="title">
                {{item.title}}
            </h2>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>
        </ul>
       
        <!-- <p v-if="loading">加载中...</p> -->
        <p v-if="noMore">没有更多了</p>
    </div>
     
    </div>
</template>
<script>
import {Indicator} from 'mint-ui'
export default {
    data() {
        return {
            goodsList:[],
            number:1,
            count: 10,
            loading: false,
            timer:undefined,
            flag:false,//noMore
        }
    },
    created() {
        this.getData();
    },
    computed: {
      noMore () {
        return this.flag
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
        getData(){
            console.log(this.number);
            this.axios.get('api/getgoods?pageindex='+this.number).then(res=>{
                if(res.data.status === 0){
                    Indicator.close();
                    this.goodsList = this.goodsList.concat(res.data.message);
                    if(!(res.data.message.length)){
                        clearTimeout(this.timer)
                        this.flag = true;
                    }
                }
            })
        },
        load () {
           Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.loading = true
            this.timer= setTimeout(() => {
                this.number+=1
                this.flag = false;
                this.loading = false;
                this.getData()
                }, 1000) 
        }
    }
}
</script>
<style lang="less" scoped>
.list{
    max-height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    justify-content: space-between;
    margin: 0;
    .list-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        border-radius: 4px; 
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 294px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight:bold;
                    font-size: 14px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}  
</style>