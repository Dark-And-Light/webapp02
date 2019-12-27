<template>
    <div class="picture">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                     <a :class="['mui-control-item',item.id==0? 'mui-active':'']" data-wid="tab-top-subpage-1.html" 
                     v-for="item in photoList" 
                     :key="item.id" 
                     @click="getimages(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 懒加载图片区域 -->
        <ul>
            <li v-for="(item, index) in imgList" :key="index"
            @click="goInfo(item.id)" >
                 <img v-lazy="item.img_url">
                 <div class="imginfo">
                     <h3>{{item.title}}</h3>
                     <p class="img-body">
                         {{item.zhaiyao}}
                     </p>
                 </div>
            </li>
        </ul>
    </div>
    
</template>
<script>
import mui from '../../../static/lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            photoList:[],
            imgList:[]
        }
    },
    created(){
        this.getimgcategory()
        this.getimages(0)//页面初始传递值0
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
         getimgcategory(){//获取图片title
         
          this.axios.get('api/getimgcategory').then(res=>{
              console.log(res);
               if(res.data.status === 0){
                    res.data.message.unshift({ title:"全部", id:0 })
                    this.photoList = res.data.message;
                }
          })
        },
        getimages(id){//通过传递的ID获取图片
             this.axios.get('api/getimages/'+id).then(res=>{
               // console.log(id+'___________'+res);
                if(res.data.status===0){
                    this.imgList = res.data.message;
                }else{
                    alert('失败')
                }
            })
        },
        goInfo(id){
            this.$router.push({ path: '/home/picInfo', query: { id }})
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
        console.log(sessionStorage.getItem('reload'));
        if(sessionStorage.getItem('reload') == 'yes'){
            sessionStorage.setItem('reload','no')
            location.reload();
        }
    }

}
</script>
<style lang="less" scoped>
.picture{
    #slider{
        cursor:pointer;
    }
    ul{
        margin: 0;
		padding: 0;
		padding: 6px;
		padding-bottom: 0;
        li{
            margin-bottom: 4px;
			list-style: none;
			// background-color: #cccccc;
			text-align: center;
			box-shadow: 0 0 8px #999;
			position: relative;
			img{
				width: 100%;
				vertical-align: top;
				border-radius: 6px;
			}
			img[lazy=loading] {
                width: 100%;
                height: 100%;
                // margin: auto;
                background: url('../../assets/image/timg.gif') no-repeat center;
            }
            .imginfo{
                position: absolute;
                bottom: 0;
                background: rgba(0,0,0,0.3);
                max-height: 86px;
                h3{
                    font-size: 12px;
                    color: white;
                    
                }
                p{
                    font-size: 10px;
                    color: white;
                }
            }
        }
    }
   touch-action: pan-y;
}
</style>