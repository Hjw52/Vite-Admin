import{createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        name:"Home",
        component:()=>import("../views/dashboard/index.vue"),
    },
    {
        path:"/dashboard",
        name:"主面板",
        component:()=>import("../views/dashboard/index.vue"),
        children:[
            {
                path: "work",
                name: "工作台",
                component: () =>import("../views/dashboard/Work/index.vue")
            },
            {
                path: "analyse",
                name: "分析台",
                component: () =>import("../views/dashboard/Analyse/index.vue")
            }
        ]
    },
    {
        path: "/about",
        name: "关于",
        component: () =>import("../views/dashboard/About/index.vue")
    }
];
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;