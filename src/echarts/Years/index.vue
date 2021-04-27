<template>
  <div id="year" class="year"></div>
</template>
<script lang="ts">
import { inject, onMounted,defineComponent } from 'vue'
import {elResize} from '../../utils/resize'
export default defineComponent({
  setup(){
    name:"Years"  
    let echarts:any=inject("echarts")
    let option={
         title: {
        top: 30,
        left: 'center',
        text: '2021年某人每天的步数'
    },
    tooltip: {},
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2021',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2021)
    }
    }
    function getVirtulData(year:Number) {
    year = year || '2020';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
    }
    onMounted(()=>{
      
      let myChart=echarts.init(document.getElementById("year"))
      myChart.setOption(option,true)
      elResize(myChart)
      window.addEventListener("resize",()=>{
        myChart.resize()
      })
    })
  }
})
</script>
<style scoped>
.year{
  background-color: #fff;
  flex: 1 0 100%;
  height:40vh;
  padding: 10px;
  min-height: 300px;
}
</style>