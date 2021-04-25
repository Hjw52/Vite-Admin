<template>
  <div :id="id" class="line"></div>
</template>
<script lang="ts">
import { inject, onMounted,defineComponent } from 'vue'
export default defineComponent({
  props:{
      id:String
  },
  setup(props){
    name:"Line"  
    var id=props.id||""
    let echarts:any=inject("echarts")
    let option={
            title: {
        text: '折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
    
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
    }
    onMounted(()=>{
      let myChart=echarts.init(document.getElementById(id))
      myChart.setOption(option,true)
      window.addEventListener("resize",()=>{
        myChart.resize()
      })
    })
    return{
        id
    }
  }
})
</script>
<style scoped>
.line{
  flex: 1 0 100%;
  min-height: 300px;
  background-color: #fff;
  padding: 20px;
 
 
}
</style>