<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多输入120个字符)" maxlength="120" v-model="msg"></textarea>
       <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>
        <!-- 评论内容区域 -->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in cmt" :key="index">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time| time('YYYY-MM-DD HH:mm:ss')}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    props:["id"],
    data() {
        return {
             pageindex:1,
             cmt:[],
             msg:''
        }
    },
    created() {
        this.getCmt();
    },
    methods: {
      getCmt(){
          this.axios.get("api/getcomments/"+this.id+"?"+"pageindex="+this.pageindex).then((res) => {
              console.log('getCmt',res.data)
              if(res.data.status === 0){
                  this.cmt = res.data.message;
              }
          })
      },
      postCmt(){//提交评论
            if(this.msg.trim().length === 0) return Toast('内容不能为空')
            this.axios.post('api/postcomment/'+this.id,this.$qs.stringify({
                content:this.msg.trim()
            })).then(res=>{
                // console.log(this.msg);
                
                console.log('post',res.data);
                
                if(res.data.status === 0){
                    let cmt = {
                        user_name: "匿名用户007",
                        add_time: Date.now(),
                        content:this.msg.trim()
                    }
                    this.cmt.unshift(cmt)
                    this.msg = ''
                }
            }).catch(error=>{
                console.log(error);
                
            })
      }
    }


}
</script>
<style lang="less" scoped>
.cmt-container{
   h3{
       font-size: 18px;
   }
   textarea{
       font-size: 14px;
       height: 85px;
       margin: 0;
       padding: 0;
   }
   .cmt-list{
       margin: 10px 0 ;
       .cmt-item{
           font-size: 12px;
           .cmt-title{
               background: #cccccc;
               line-height: 20px;
           }
           .cmt-body{
               line-height: 20px;
               text-indent: 2em;
           }
       }
   }
}
</style>
