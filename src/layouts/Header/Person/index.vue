<template>
  <div>
    <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <span>{{UserName}}</span>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import {ElAvatar}from 'element-plus'
export default defineComponent({
    name:'person',
    components:{
        ElAvatar
    },
    setup(){
        const UserName=ref("Vite Admin")
        return {
            UserName
        }
    }
})
</script>

<style scoped>
div{
    display: table-cell;
}
</style>