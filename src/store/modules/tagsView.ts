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
            console.log(state.visitedViews)
            if(state.visitedViews.some(v=>v.path===view.path)) {
                console.log('same')
                return
            }
            state.visitedViews.push(view)
            console.log(view.path)
            console.log(state.visitedViews)
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
            return state.visitedViews
        }
    }
}