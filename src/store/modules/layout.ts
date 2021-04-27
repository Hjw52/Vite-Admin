export interface layoutState{
    isCollapse:boolean
} 
export default {
    state:{
        //侧边栏是否展开
        isCollapse:true
    },
    mutations:{
        change(state:layoutState){
            state.isCollapse =!state.isCollapse
        }
    },
    actions:{
        change(context:any){
            context.commit('change')
        }
    },
    getters:{
        getIsCollapse(state:layoutState){
            return state.isCollapse
        }
    }
}