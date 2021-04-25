<template>
    <div>
        <img src="../../assets/logo2.png">
    </div>
    <span class="title" v-show="!store.getters.getIsCollapse" >Vite-Admin</span>
    
    
</template>
<script>
import { defineComponent } from 'vue'
import { useStore}from 'vuex'
export default defineComponent({
    name:"logo",
    setup() {
        const store=useStore()
        return {
            store
        }    
    },
})
</script>
<style scoped>
div{
    width: 40px;
    height: 40px;
    padding: 10px;
}
 img{
     width: 100%;
     height: 100%;
 }
 .title{
     line-height: 60px;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: bolder;
     font-size: 24px;
     color: #fff;
 }
</style>
