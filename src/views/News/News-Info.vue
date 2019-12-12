<template>
    <div class="NewsInfo">
        <h4 class="title">{{NewsInfo.title}}</h4>
        <p class="subtitle">
            <span>发表时间:{{NewsInfo.add_time|time('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>点击:{{NewsInfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="conter" v-html="NewsInfo.content">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            NewsInfo:{},
        }
    },
    created(){
        this.axios.get('api/getnew/'+this.id).then((res) => {
            console.log(res);
            if(res.data.status === 0){
                this.NewsInfo = res.data.message[0];
            }
            
        }).catch((err) => {
            
        });
    }
}
</script>
<style lang="less" scoped>
.NewsInfo{
    padding: 0 6px;
    .title{
        font-size: 14px;
        line-height: 20px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
    .conter{
        p{
            font-size: 12px;
        }
    }
}   
</style>