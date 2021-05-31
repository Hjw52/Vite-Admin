<template>
<div>

<div class="about-header">
  <h2>关于</h2>
  <p>{{Description}}</p>
</div>

  <div>
<el-descriptions title="生产环境依赖" direction="horizontal" :column="3" border
  size="medium">
  <el-descriptions-item v-for="item in dependencies" :key="item.name" :label="item.name" >{{item.verson}}</el-descriptions-item>
</el-descriptions>
  </div>
  <div>
<el-descriptions title="开发环境依赖" direction="horizontal" :column="3" border>
  <el-descriptions-item v-for="item in devDependencies" :key="item.name" :label="item.name">{{item.verson}}</el-descriptions-item>
</el-descriptions>
 </div>
 </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ElDescriptions,ElDescriptionsItem} from 'element-plus'
import Package from '../../../../package.json'
interface Dependcy{
  [key:string]:string
}
export default defineComponent({
  name:"about",
  components:{
    ElDescriptions,ElDescriptionsItem
  },
  setup(){
    const Description="vite-admin 是一个基于Vue3、Vite、 Element-plus 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例。"
    let devDependencies:object[]= []
    let dependencies:object[]=[]
    let devDependcy:Dependcy=Package.devDependencies
    let dependcy:Dependcy=Package.dependencies
    //开发依赖
    for(let key in devDependcy){
       devDependencies.push({
         name:key,
         verson:devDependcy[key]
       }) 
    }
    //生产依赖
    for(let key in dependcy){
       dependencies.push({
         name:key,
         verson:dependcy[key]
       }) 
    }
    return {
     devDependencies,dependencies,Description
    }
  }
})

</script>

<style scoped>
.about-header{
  text-align: left;
  line-height: 20px;
}
:deep(.el-descriptions__header) {
  margin-bottom: -40px;
}
:deep(.el-descriptions__title) {
  font-weight: 70;
}
</style>