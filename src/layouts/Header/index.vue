<template>
<div class="bread">
<BreadCrumb/>
</div>
<Tabpane/>

</template>

<script lang="ts">
import BreadCrumb from "../BreadCrumb/index.vue" 
import Tabpane from "../Tabpane/index.vue"
import {defineComponent} from 'vue'
export default defineComponent({
    name:"headers",
    components:{
        BreadCrumb,Tabpane
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