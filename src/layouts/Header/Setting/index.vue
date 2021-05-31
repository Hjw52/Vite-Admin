<template>
  <div>
      <i class="el-icon-setting" @click="handleDrawer"></i>
       <el-drawer
       title="项目设置"
       v-model="drawer"
       >
       <el-divider content-position="center">主题</el-divider>
       <el-divider content-position="center">导航栏模式</el-divider>
       <el-divider content-position="center">系统主题</el-divider>
       <el-divider content-position="center">菜单主题</el-divider>
       <el-divider content-position="center">界面功能</el-divider>
       </el-drawer>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import {ElDrawer,ElDivider }from 'element-plus'
export default defineComponent({
    name:'setting',
    components:{
        ElDrawer,ElDivider
    },
    setup(){
        const drawer=ref(false)
        const handleDrawer=()=>{
           // console.log(drawer)
            drawer.value=true
        }
        return {
            drawer,
            handleDrawer
        }
    }

}) 
</script>

<style scoped>
.el-divider{
    margin-top: 60px;
}
</style>