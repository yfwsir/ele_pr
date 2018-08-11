import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        headerTitle : '',
        cityName:'正在定位...'
    },
    mutations:{
        changeHeaderTitle(state,params){
            state.headerTitle = params ;
        },
        changeCityName(state,params){
            state.cityName = params ;
        }
    }
})

export default store