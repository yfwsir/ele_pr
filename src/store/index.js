import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        headerTitle : '',
        cityName:'正在定位...',
        shopData:{},
        orderData:[],
        isAdd:true
    },
    mutations:{
        changeHeaderTitle(state,params){
            state.headerTitle = params ;
        },
        changeShopData(state,params){
            state.shopData = params ;
        },
        changeCityName(state,params){
            state.cityName = params ;
        },
        changeOrderData(state,params){
            state.isAdd = true
            state.orderData.map(item=>{
                if(params.name == item.name){
                    state.isAdd=false
                    item.num = params.num
                    item.total_price = params.total_price
                }
            })
            if(state.isAdd == true){
                state.orderData.push(params)
            }
        }
    }
})

export default store