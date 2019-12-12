<template>
    <!-- 轮播图组件 -->
    <div>
        <el-carousel height="200px">
            <el-carousel-item v-for="(item,index) in lbt" :key="index">
                <img :src="item.img" :class="{'full':isfull}">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    props:["lbt","isfull"],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="less">
.el-carousel__item{
    text-align: center;
    img{
       height: 100%; 
    }
    .full{
        width: 100%;
    }
}
</style>