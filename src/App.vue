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
    const store=useStore()
    var IsCollapse=computed(()=>store.getters.getIsCollapse)
    var siderWidth=computed(()=>(IsCollapse.value==true?"64px":"220px"))
    return{
      siderWidth
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
.el-container{
  height: 100vh;
}
 .el-header{
    /* width: calc(100% - v-bind(siderWidth));
    margin-left: v-bind(siderWidth); */
    color: #333;
    text-align: center;
    line-height: 80px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
    /* position: fixed;
    left: 0; */
  }

  .el-main {
    flex-grow: 1;
    /* margin-left: v-bind(siderWidth); */
    overflow: auto;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
   
  }
</style>