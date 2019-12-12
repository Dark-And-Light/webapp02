<template>
  <div class="app">
    <!-- 固定在顶部 -->
    <mt-header fixed title="webApp">
          <span slot="left" @click="goBack" v-show="falg">
            <mt-button icon="back">返回</mt-button>
          </span>
    </mt-header>

    <transition>
      <router-view></router-view>
    </transition>
    
         <!-- 底部标签栏 -->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-llb" to="/Home" tag="a">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
        </router-link>
        <a class="mui-tab-item-llb" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
        </a>
        <router-link class="mui-tab-item-llb" to="/Car">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.total}}</span></span>
        <span class="mui-tab-label">购物车</span>
        </router-link>
        <a class="mui-tab-item-llb" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
        </a>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      falg:true
    }
  },
  methods: {
      goBack(){
        //点击后退
        this.$router.go(-1);
      }
  },
  computed:{
      ...mapGetters([
          'total'
      ])
  },
  created() {
    this.falg = this.$route.path === "/Home" ? false:true;
    console.log(this.$route.path);
  },
  watch:{
    "$route.path":function(newVal){
        if(newVal === "/Home"){
          this.falg = false;
        }else{
          this.falg = true;
        }
    }
  }
}
</script>

<style lang="less" scoped>
.app{
  box-sizing: border-box;
  padding: 40px 0 50px 0;
  .mint-header.is-fixed{
    z-index: 99;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
}
</style>
