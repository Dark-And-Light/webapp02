<template>
    <div>
        <div class="mui-numbox" style="height:26px; width:110px;"  data-numbox-min='0'
        :data-numbox-max="stock_quantity">
        <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" @change="countChange" :value="num" readonly/>
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../static/lib/mui/js/mui.min.js'
import {mapActions} from 'vuex'
export default {
    props:['num','id','stock_quantity'],
    mounted() {
        mui(".mui-numbox").numbox()//mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
    },
    methods: {
        ...mapActions([
            'updateNum'
        ]),
        countChange(e){
            console.log(this.id,e.target.value);
            this.updateNum({id:this.id,num:parseInt(e.target.value)})
        }
    },
}
</script>
<style lang="less">
    
</style>