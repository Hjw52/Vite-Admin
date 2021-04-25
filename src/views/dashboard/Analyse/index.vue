<template>
<div class="chart-list">
  <el-row type="flex" :gutter="40">
    <el-col :lg="6">
       <Card id="card1"/>
    </el-col>
      <el-col :lg="6">
       <Card id="card2"/>
    </el-col>
     <el-col :lg="6">
       <Card id="card3"/>
    </el-col>
     <el-col :lg="6">
       <Card id="card4"/>
    </el-col>
  </el-row>
  <el-row :gutter="40">
    <el-col :lg="12">
       <Line id="line1"/>
    </el-col>
     <el-col :lg="12">
       <Line id="line2"/>
    </el-col>
  </el-row>

<el-row type="flex" justify="center">
    <el-col :span="24">
       <Years/>
    </el-col>
</el-row>

</div>

</template>


<script lang="ts">
import {ElCol,ElRow} from 'element-plus'
import { inject, onMounted,defineComponent } from 'vue'
import Years from '../../../echarts/Years/index.vue'
import Line from '../../../echarts/Line/index.vue'
import Card from '../../../echarts/Card/index.vue'
export default defineComponent({
  name:"analyse",
  components:{
      Years,Line,ElCol,ElRow,Card
    },
  setup(){
    
  }
})
</script>
<style scoped>
.el-row {
    margin-bottom: 40px;
  }
@media (max-width: 1200px) {
   .el-row {
    flex-direction:column;
    justify-content: center;
  }
   .el-col{
    margin-bottom: 20px;
  }
}
</style>