<template>
    <div>
        <div class="mui-numbox" :data-numbox-max="quantity"  data-numbox-min='1'>
        <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" @change="countChange" value="1"/>
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../static/lib/mui/js/mui.min.js'
export default {
    props:['quantity'],
    mounted() {
        mui(".mui-numbox").numbox()//mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
    },
    methods: {
      countChange(e){
        //   console.log(e.target.value);
          this.$emit('getCount',parseInt(e.target.value))
      }
    },
}
</script>
<style lang="less">
    
</style>