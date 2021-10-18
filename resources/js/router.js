import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
import firstcomp from './components/pages/myFirstvueComp.vue'
import secondcom from './components/pages/secondcom.vue'
import hooks from './components/pages/basic/hooks.vue'
const routes =[
    {
        path:'/',
        components: {
            default: firstcomp,
            nav: secondcom
        }
      

    },
    {
        path:'/hooks',
        component:hooks
      

    }
   
]


export default new router({
mode:'history',
routes

})