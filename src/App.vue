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
import { defineComponent, provide } from 'vue'
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
    margin-left: 14vw;
    /* width: calc(100% - auto);  */
    color: #333;
    text-align: center;
    line-height: 80px;
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
    margin-left: 14vw;
    overflow-y: scroll;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>