<template>
  <div :id="id" class="card"></div>
</template>
<script lang="ts">
import { number } from 'echarts'
import { inject, onMounted,defineComponent } from 'vue'
export default defineComponent({
  props:{
      id:String
  },
  setup(props){
    name:"Line"  
    var id=props.id||""
    onMounted(()=>{
      
    })
    return{
        id
    }
  }
})
</script>
<style scoped>
.card{
  flex: 1 0 100%;
  min-width: 150px;
  height: 200px;
  background-color: #fff;
 
}
</style>