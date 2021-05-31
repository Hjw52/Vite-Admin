<template>
   <el-container>
    <el-aside width="auto">
      <Asider/>
    </el-aside>
    <el-container>
      <el-header height="80px">
        <Headers/>
      </el-header>
      <el-main>
        <!-- <keep-alive>
            <router-view/>
        </keep-alive> -->
        
          <router-view v-slot="{ Component }">
             <transition name="slide-fade">
            <keep-alive>
            <component :is="Component" />
            </keep-alive>
           </transition>
        </router-view>
        
       
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import {ElContainer,ElAside,ElMain,ElHeader} from 'element-plus'
import Headers from '../src/layouts/Header/index.vue'
import Asider from '../src/layouts/Asider/index.vue'
import { useStore} from 'vuex'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'App',
  components: {
   ElContainer,ElAside,ElMain,ElHeader,Asider,Headers
  },
  setup(){
    provide('echarts',echarts)
  }
})
</script>

<style>
body{
 margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-container{
  height: 100vh;
}
 .el-header{
    color: #333;
    text-align: center;
    line-height: 80px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
    
  }

  .el-main {
    flex-grow: 1;
    
    overflow: auto;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
   
  }
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>