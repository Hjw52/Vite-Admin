import{createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        name:"Home",
        component:()=>import("../views/dashboard/index.vue"),
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        component:()=>import("../views/dashboard/index.vue"),
        children:[
            {
                path: "work",
                name: "Work",
                component: () =>import("../views/dashboard/Work/index.vue")
            },
            {
                path: "analyse",
                name: "Analyse",
                component: () =>import("../views/dashboard/Analyse/index.vue")
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: () =>import("../views/dashboard/About/index.vue")
    }
];
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;