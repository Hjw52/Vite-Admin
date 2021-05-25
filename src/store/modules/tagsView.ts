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
            
            state.visitedViews.length && console.log(state.visitedViews[0].path)
            if(state.visitedViews.some(v=>v.path===view.path)) {
                console.log('same')
                return
            }
            state.visitedViews.push(view)
        },
        DEL_VISITED_VIEW: (state:tagsViewState,view:RouteRecordRaw) => {
            for (const [i, v] of state.visitedViews.entries()) {
              if (v.path === view.path) {
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
        delVisitedView(context:any,view:RouteRecordRaw) {
            context.commit('DEL_VISITED_VIEW', view)
        }
    },
    getters:{
        getVisitedViews(state:tagsViewState){
            console.log("getter:"+state.visitedViews)
            return state.visitedViews
        }
    }
}