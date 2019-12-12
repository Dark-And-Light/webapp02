<template>
    <div class="home">
        <!-- 子组件轮播图 -->
       <swipe :lbt="lbt" :isfull="true"></swipe>
        <!-- 九宫格改6格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/News-List">
                    <img src="../../assets/grid/menu1.png" alt="1">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Picture">
                    <img src="../../assets/grid/menu2.png" alt="2">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/Home/Goods-List">
                    <img src="../../assets/grid/menu3.png" alt="3">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/grid/menu4.png" alt="4">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/grid/menu5.png" alt="5">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/grid/menu6.png" alt="6">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
import swipe from '../../components/swipe'
export default {
    data() {
        return {
            lbt:[]
        }
    },
    methods: {
        
    },
    created() {
        // 当data和methods都初始化好时 获取lbt的数据并传递给子组件
        this.axios.get('api/getlunbo')
        .then(res => {          
           if(res.data.status === 0 ){
                this.lbt = res.data.message
            } 
        })
        .catch(err => {
            console.error(err);
        })
    },
    components:{
        swipe
    }
}
</script>
<style lang="less" scoped>
    .home{
        .mui-grid-view.mui-grid-9{
            background-color: white;
            img{
                width: 50px;
            }
        }  
        .mui-grid-view.mui-grid-9 .mui-table-view-cell {
            border: none;
        }
    }
</style>