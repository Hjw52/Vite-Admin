<template>
 <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
   <el-breadcrumb-item v-for="item in routerList" :key="item.path">{{item.name}}</el-breadcrumb-item>
   </el-breadcrumb>
 </div>
</template>
<script lang="ts">
import {defineComponent, isReactive, onBeforeMount, reactive, ref, toRefs, watch} from 'vue'
import {useRoute, useRouter }from 'vue-router'
import {ElBreadcrumb,ElBreadcrumbItem} from 'element-plus'
interface RouterList{
     path:string,
     name:string
}
interface data{
    routerList:RouterList[]
}
export default defineComponent({
    name:"breadcrumb",
    components:{
        ElBreadcrumb,ElBreadcrumbItem
    },
    setup(){
        const data=reactive<data>({
            routerList:[]
        })
        const refData=toRefs(data)
        const router=useRoute()
        watch(()=>router.path,()=>{
            load()
        })
       
        const load=()=>{
            data.routerList=[]
            let path=router.path
            let pathList=path.split("/")
            for(let item of pathList){
                if(item){
                   let obj:RouterList={
                    path:item,
                    name:item
                  }
                  data.routerList.push(obj)
                }
            }
        }
        onBeforeMount(()=>{
           load()
        })
        return {
          ...refData
        }
    }
})

</script>