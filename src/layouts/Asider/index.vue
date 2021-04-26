<template>

<el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"  background-color="#001529"
    text-color="#fff"
    active-text-color="#ffd04b"
    router:true
    collapse-transition:true>
    <div class="logo" @click="handleCollapse">
    <Logo/>
  </div>
  <el-submenu index="1">
    <template #title>
      <i class="el-icon-menu"></i>
      <span>Dashboard</span>
    </template>
    <el-menu-item-group>
     <router-link to="/dashboard/analyse">
      <el-menu-item index="1-1">分析台</el-menu-item>
     </router-link>
      <router-link to="/dashboard/work">
        <el-menu-item index="1-2">工作台</el-menu-item>
     </router-link>
    
     
    </el-menu-item-group>
  </el-submenu>
  <router-link to="/about">
  <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <template #title>关于</template>
  </el-menu-item>
  </router-link>
</el-menu>  




</template>
<script lang="ts">
import {defineComponent,ref} from 'vue'
import Logo from '../../components/Logo/index.vue'
import{ElMenu,ElMenuItem,ElSubmenu,ElMenuItemGroup,ElRadioGroup,ElRadioButton} from 'element-plus'
import {useStore} from 'vuex'

export default defineComponent({
  name:"asider",
  components:{
     ElMenu,ElMenuItem,ElSubmenu,ElMenuItemGroup,ElRadioGroup,ElRadioButton,Logo
  },
  setup(){
    const store=useStore()
    const isCollapse=ref(true)
   // isCollapse.value=store.getters.getIsCollapse
    const handleOpen=(key:string, keyPath:string):void=>{
      console.log(key, keyPath);
    }
    const handleClose=(key:string, keyPath:string):void=>{
      console.log(key, keyPath);
    }
    const handleCollapse=()=>{
         store.commit("change")
         isCollapse.value=store.getters.getIsCollapse
         //console.log(isCollapse.value)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      handleCollapse
    }
  }
})

</script>

<style scoped>
 .el-menu-vertical-demo{
     height: 100vh;
 }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    height: 100vh;
  }
  .logo{
      display: flex;
      height: 8vh;
      min-height: 50px;
      background-color: #001529;
  }
</style>