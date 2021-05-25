<template>
<div>
 <el-tabs closable>
      <el-tab-pane
      v-for="item in tabList"
      :key="item.name"
      :label="item.name"
      :name="item.name"
      /> 
    
  </el-tabs>
</div>
</template>

<script lang="ts">
import {defineComponent, reactive,toRefs,watch} from 'vue'
import {ElTabs,ElTabPane} from 'element-plus'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
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
        
        const router=useRoute()
        const store=useStore()
        watch(()=>router.path,()=>{
            console.log("："+JSON.stringify(store.state.TagView.visitedViews))
            store.dispatch("addVisitedView",router)
             console.log("after："+JSON.stringify(store.state.TagView.visitedViews))
           // console.log(router)
        })
        data.tabList=store.getters.getVisitedViews
       // console.log("store:"+ JSON.stringify(store.state))
        const refData=toRefs(data)
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