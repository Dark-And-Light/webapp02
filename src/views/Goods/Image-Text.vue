<template>
    <div class="image-text">
        <h3>{{jieshaoInfo.title}}</h3>
        <hr>
        <div class="content" v-html="jieshaoInfo.content">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jieshaoInfo:{},
            id:this.$route.query.id
        }
    },
    created() {
        this.getGoodsjs()
    },
    methods: {
        getGoodsjs(){
            this.axios.get('api/goods/getdesc/'+this.id).then((res) => {
                console.log(res.data.message);//数据为空 并不是代码错误而是数据是空的
                if(res.data.status===0){
                    this.jieshaoInfo = res.data.message[0];
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.image-text{
    padding: 0 10px;
    h3{
        font-size: 15px;
        line-height: 20px;
    }
    img{
        height: 100%;
        width: 100%;
    }
}
</style>
