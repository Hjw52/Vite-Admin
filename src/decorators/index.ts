import {createDecorator} from 'vue-class-component'

export const Log=createDecorator((options,key)=>{
    const origin=options.methods[key]
    console.log(options,key)
    options.methods[key]=function wrapper(...args:any[]){
        console.log(options,key)
        //console.log(`Invoked:${key}(`,...args,')')
        origin.apply(this,args)
    }
    
})