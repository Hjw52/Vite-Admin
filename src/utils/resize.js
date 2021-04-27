import  elementResizeDetectorMaker  from 'element-resize-detector'

 let echarts=[]
export function elResize(echart){
    echarts.push(echart)
    let er=elementResizeDetectorMaker()
    er.listenTo(document.getElementsByClassName("el-aside"),function(element){
        echarts.forEach(item=>{
           item.resize()
        })
   })
}