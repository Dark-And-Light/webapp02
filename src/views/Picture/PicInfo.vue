<template>
    <div class="PicInfo">
        <h2>{{picInfo.title}}</h2>
        <div class="Pinfo">
            <span>发表时间：{{picInfo.add_time}}</span>
            <span>点击：{{picInfo.click}}次</span>
        </div>
        <hr>
        <!-- 缩略图区 -->
        <div class="thumbs">
            <vue-preview :slides="slide1"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="picInfo.content">

        </div>
        <!-- 评论 -->
        <comm :id="this.id"></comm>
    </div>
</template>
<script>
import comm from '../../components/comment'
export default {
    data() {
        return {
            id:this.$route.query.id,
            picInfo:{},
            slide1:[]
        }
    },
    methods:{
        getPicInfo(){
            this.axios.get('api/getimageInfo/'+this.id).then(res=>{
                console.log(res);
                if(res.data.status === 0){
                    this.picInfo = res.data.message[0]
                }else{
                    alert('0')
                }
            })
        },
        getThums(){//获取缩略图
            this.axios.get('api/getthumimages/'+this.id).then(res=>{
                console.log(res);
                if(res.data.status === 0){
                    res.data.message.forEach(item => {
                        item.w = 600
                        item.h = 400;
                        item.msrc = item.src
                    });
                    this.slide1 = res.data.message;
                }
            })
        }
     
    },
    created() {
        this.getPicInfo()
        this.getThums()
    },
    components:{
        comm
    }
}
</script>
<style lang="less" scoped>
.PicInfo{
    padding: 4px;
    h2{
        text-align: center;
        color: rgb(88, 137, 230);
        font-size: 14px;
    }
    .Pinfo{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 10px;
            color: #ccc;
        }
    }
    .content{
        font-size: 12px;
    }
    //引入vue-preview 缩略图 在页面不显示但点击可以显示 需要增加msrc属性 并通过以下CSS设置在页面显示的样式
    .thumbs {
        /deep/ .my-gallery {
            display: flex;
            flex-wrap: wrap;
            figure {
            width: 30%;
            margin: 5px;
                img {
                    width: 100%;
                    box-shadow: 0 0 6px #ccc;
                }
            }
        }
    }
}  
</style>