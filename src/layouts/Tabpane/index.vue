<template>
<div>
 <el-tabs closable>
      <el-tab-pane
      v-for="item in tabList"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      /> 
    
  </el-tabs>
</div>
</template>

<script lang="ts">
import {defineComponent, reactive,toRefs} from 'vue'
import {ElTabs,ElTabPane} from 'element-plus'
interface data{
    tabList:Tablist[]
}
interface Tablist{
    title:string,
    name:string,
}
export default defineComponent({
    name:"tabpane",
    components:{
        ElTabs,ElTabPane
    },
    setup(){
        const data=reactive<data>({
            tabList:[]
        })
        const refData=toRefs(data)
        data.tabList=[{
            title:'tab1',
            name:'1',
        },{
            title:'tab2',
            name:'2',
        },{
            title:'tab3',
            name:'3',
        }]
        return {
            ...refData
        }
    }
})
</script>

<style scoped>
 :deep(.el-tabs__nav-wrap::after) {
      position: static !important;
  }
 :deep(.el-tabs__active-bar) {
  background-color: transparent !important;
}

</style>