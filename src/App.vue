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
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, provide,ref,watch } from 'vue'
import {useStore} from 'vuex'
import {ElContainer,ElAside,ElMain,ElHeader} from 'element-plus'
import Headers from '../src/layouts/Header/index.vue'
import Asider from '../src/layouts/Asider/index.vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'App',
  components: {
   ElContainer,ElAside,ElMain,ElHeader,Asider,Headers
  },
  setup(){
    provide('echarts',echarts)
    const store=useStore()
    var isCollapse=computed(()=>store.getters.getIsCollapse)
    var asiderWidth=computed(()=>(isCollapse.value==true?"64px":"220px"))
    return {
      asiderWidth,
      isCollapse
    }
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
 .el-header{
    margin-left: v-bind(asiderWidth);
    color: #333;
    text-align: center;
    line-height: 80px;
    position: fixed;
    top:0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
    position: fixed;
    left: 0;
    
  }

  .el-main {
    margin-left: v-bind(asiderWidth);
    margin-top: 80px; 
    color: #333;
    overflow-y: scroll;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    
  }
</style>