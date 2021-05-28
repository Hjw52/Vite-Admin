# Vite-Admin

本次项目目标做成企业化后台管理系统的模板，整体向vue3+TS 迁移，所有技术栈都与vue3版本对齐。

![image-20210528102315204](https://ftp.bmp.ovh/imgs/2021/05/20651cd1eaddfd5e.png)

#### **技术栈：**

- Vue3
- Typescript
- Vue Router4
- Vuex4
- 构建工具：Vite
- UI框架：Element-plus

#### 运行方式：

```
npm run dev
```

#### 搭建方式：

1. 初始化Vite项目

```
npm init @vitejs/app <project-name>  	npm 安装
npm i 安装依赖
```

选择相应的Vue-ts模板即可。Vue3所有的API都使用按需加载的方式，其挂载方式也修改为：

```
import { createApp } from 'vue'
createApp(App).mount('#app')
```

2. 安装Vue-router4、Vuex4

```
npm i vue-router@next vuex@next
```

router4的基本使用方式：[文档](https://next.router.vuejs.org/zh/)

```
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
```

vuex4使用方式：[文档](https://next.vuex.vuejs.org/)

```
import {createStore} from 'vuex'
import Layout from './modules/layout'
import TagView from './modules/tagsView'
export default createStore({
    modules:{
        Layout,TagView //模块名
    }
})
```

	3. 安装 element-plus

```
npm install element-plus --save
```

配置按需引入：

安装插件

```
npm i vite-plugin-imp
```

修改Vite.config.ts

```
import vitePluginImp from 'vite-plugin-imp'
export default defineConfig({
  
  plugins: [vue(),
    vitePluginImp({
      libList:[
        {
          libName:'element-plus',
          style:(name)=>{
            return`element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ])
```

在main.ts需要引入样式

```
import 'element-plus/lib/theme-chalk/index.css'
```

即可生效。