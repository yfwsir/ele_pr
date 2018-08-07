import API from '../API/API'
import axios from 'axios'

//请求首页餐馆的信息
export function restaurantData(){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v3/restaurants?latitude=18.25248&longitude=109.512093&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
        )
        .then(res=>{
            res.data.items.map(item=>{
                item.restaurant.isShow = false
            })
            console.log(res.data.items)
            resolve(res.data.items)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}