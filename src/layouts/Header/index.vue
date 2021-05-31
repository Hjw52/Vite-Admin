<template>
<div class="bread">
<BreadCrumb/>
</div>
<div class="person">
<Person/>
</div>
<div class="setting">
<Setting/>
</div>

<Tabpane/>

</template>

<script lang="ts">
import BreadCrumb from "../BreadCrumb/index.vue" 
import Tabpane from "../Tabpane/index.vue"
import Setting from "../Header/Setting/index.vue"
import Person from "../Header/Person/index.vue"
import {defineComponent} from 'vue'
export default defineComponent({
    name:"headers",
    components:{
        BreadCrumb,Tabpane,Setting,Person
    },
    setup(){

    }
})
</script>

<style scoped>
.bread{
    margin-top: 10px
}
.setting{
   float: right;
   font-size: 20px;
   height: 20px;
   margin-top: -40px;
   cursor: pointer;
}
.setting:hover {
    background-color: #f6f6f6;
}
.person{
    position: absolute;
    right: 60px;
    top:-14px;
    /* float: right; */
    font-size: 16px;
    cursor: pointer;
}
</style>