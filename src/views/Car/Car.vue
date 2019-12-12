<template>
    <div class="car">
 <div class="goods-list">
           <!-- 商品列表区域 -->
           <div class="mui-card" v-for="item in  carList" :key="item.id" >
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="clickState[item.id]"
                        @change="changeClick(item.id)"></mt-switch>
                        <!-- <el-switch
                        v-model="clickState[item.id]"
                        @change="changeClick(item.id)"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                        </el-switch> -->
                        <img :src="item.thumb_path">
                        <div class="info">
                            <h4>{{item.title}}</h4>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numberBox :num='carNumber[item.id]' :id="item.id" :stock_quantity="carData[0].stock_quantity"></numberBox>
                                <a href="javascript:;" 
                                @click="remove(item.id)">删除</a>
                                <!-- {{clickState}} -->
                            </p>
                        </div>

					</div>
				</div>
			</div>
       </div>
        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>
                        <p>总计不含运费</p>
                        <p>已勾选商品<span class="red">{{clickTotal}}</span>件,总价<span class="red">￥{{this.TotalPrice}}</span></p>
                    </div>
                    <mt-button type="danger" @click="SettleAccounts">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numberBox from '../../components/car-numberBox'
import {mapState,mapGetters,mapActions} from 'vuex'
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            carList:[],
            flag:true,
        }
    },
    created(){
        this.getCarData()
    },
    // beforeUpdate(){
    //     console.log('即将更新');
        
    // },
    // updated(){
    //     console.log('更新了');
        
    // },
    computed:{
        ...mapState([
            'carData'
        ]),
        ...mapGetters([
            'TotalPrice',//总价
            'clickState',
            'clickTotal',
            'carNumber'
        ])
    },
    components:{
        numberBox
    },
    methods:{
        getCarData(){//获取Car的数据
        console.log('getCarData');
        
            let idArr = [];
            this.carData.forEach(item => {
                idArr.push(item.id);
            });
            if(idArr.length <= 0) return;
            
            this.axios.get('api/goods/getshopcarlist/'+idArr.join(',')).then(res=>{
                if(res.data.status === 0 ){
                    this.carList = res.data.message;
                }
            })
        },
        ...mapActions([
            'updateClick',
            'removeCar'
        ]),
        changeClick(id,status){//监听状态更新修改状态
            console.log(id);
            this.updateClick({id})
        },
        remove(id){//删除
            console.log(id);
            this.removeCar({id})
            this.carList.forEach((item,i)=>{
                if(item.id == id){
                    this.carList.splice(i,1)
                }
            })
        },
        SettleAccounts(){//结账
            Toast('暂未开通支付功能');
        }

    }
}
</script>
<style lang="less" scoped>
.car{
    height: 100vh;
    background: #eeeeee;
    overflow: hidden;
    .goods-list{
        img{
            height: 50px;
            width: 50px;
        }
        .mui-card-content-inner{
            display: flex;
			justify-content: space-between;
            align-items: center;
            padding: 10px;
            .red{
                color:red;
            }
            .info{
				p{
					display: flex;
					justify-content: space-between;
                    font-size: 13px;
                    a{
                        line-height: 28px;
                    }
                    
				}
                .price{
                    color: red;
                    font-weight: bold;
                    line-height: 28px;
                    
                }
                h4{
                    line-height: 18px;
                    font-size: 14px;
                }
            }
        }
        
    }
}    
.mui-card-content-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
    color: red;
    font-weight: bold;
    }
    p{
        font-size: 16px;
    }
    
    
}  
</style>