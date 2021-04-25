<template>
<div class="bread">
<BreadCrumb/>
</div>
  
</template>

<script lang="ts">
import BreadCrumb from "../BreadCrumb/index.vue" 
import {defineComponent} from 'vue'
export default defineComponent({
    name:"headers",
    components:{
        BreadCrumb
    },
    setup(){

    }
})
</script>

<style scoped>
.bread{
    margin-top: 10px
}
</style>