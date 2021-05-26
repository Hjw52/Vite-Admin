<template>
<div>

    <el-tabs closable @tab-click="handleClick" @tab-remove="handleRemove">
      <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.name"
      :name="item.path"
      > 
      </el-tab-pane>
      
   </el-tabs>
</div>
</template>

<script lang="ts">
import {defineComponent, reactive,toRefs,watch} from 'vue'
import {ElTabs,ElTabPane} from 'element-plus'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
interface data{
    tabList:Tablist[]
}
interface Tablist{
    path:string,
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
        const curRouter=useRouter()
        const store=useStore()
        watch(()=>router.path,()=>{
            store.dispatch("addVisitedView",router)
           // console.log(router)
        })
        data.tabList=store.getters.getVisitedViews
       // console.log(data.tabList)
        const refData=toRefs(data)
        const handleClick=(tag:any)=>{
            //console.log(tag.props.name)
            curRouter.push({path:tag.props.name})
        }
        const handleRemove=(name:string)=>{
            store.dispatch("delVisitedView",name)
            //console.log(name)
            let len=store.getters.getVisitedViews.length
            let last=data.tabList[len-1] && data.tabList[len-1].path||"/"
            //console.log(last)
            curRouter.push({path:last})
        }
        return {
            ...refData,
            handleClick,
            handleRemove
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