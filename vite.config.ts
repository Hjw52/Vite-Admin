import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import {resolve} from 'path'
// https://vitejs.dev/config/
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
  ],
  optimizeDeps:{
   include:['vue-class-component'],
  
  },
  resolve:{
    alias:{
      "@":resolve(__dirname,"src")
    }
  },
  base:"./",
  server:{
    open:true,
    cors:true
  }
})
