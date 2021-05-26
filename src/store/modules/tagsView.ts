import{RouteRecordRaw} from 'vue-router'
export interface tagsViewState{
    visitedViews:Array<RouteRecordRaw>
}
export default{
    state:{
        visitedViews: [], 
    },
    mutations:{
        ADD_VISITED_VIEW:(state:tagsViewState,view:RouteRecordRaw)=>{
            if(state.visitedViews.some(v=>v.path===view.path)) {
                return
            }
            //深拷贝
            state.visitedViews.push(Object.assign({},view))
        },
        DEL_VISITED_VIEW: (state:tagsViewState,view:string) => {
            for (const [i, v] of state.visitedViews.entries()) {
              if (v.path === view) {
                state.visitedViews.splice(i, 1)
                break
              }
            }
        }

    },
    actions:{
        addVisitedView(context:any,view:RouteRecordRaw) {
            context.commit('ADD_VISITED_VIEW', view)
        },
        delVisitedView(context:any,view:string) {
            context.commit('DEL_VISITED_VIEW', view)
        }
    },
    getters:{
        getVisitedViews(state:tagsViewState){
            return state.visitedViews
        }
    }
}