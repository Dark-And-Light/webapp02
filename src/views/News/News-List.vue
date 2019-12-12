<template>
    <div>
         <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in NewsList" :key="item.id">
                <router-link :to="'/Home/News-Info/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url" />
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.add_time|time('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            NewsList:[]
        }
    },
    created() {
        this.axios.get('api/getnewslist').then(res=>{
            if(res.data.status === 0){
                this.NewsList = res.data.message;
            }
        })
    },
}
</script>
<style lang="less" scoped>
.mui-table-view{
    li{
        h3{
            font-size: 14px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            span{
                font-size: 12px;
                color: #226aff;
            }
        }
    }
}   
</style>