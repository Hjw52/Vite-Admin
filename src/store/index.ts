import {createStore} from 'vuex'
import Layout from './modules/layout'
import TagView from './modules/tagsView'
export default createStore({
    modules:{
        Layout,TagView
    }
})