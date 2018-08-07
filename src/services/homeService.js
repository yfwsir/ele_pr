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

// 请求搜索页面热点搜索的数据
export function hotSearchData(){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v3/hot_search_words?latitude=18.25248&longitude=109.512093'
        )
        .then(res=>{
            // console.log(res.data)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}


// 搜索关键字匹配的详情页数据
export function footDetailData(keyword){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v2/restaurants/search?offset=0&limit=15&keyword='+keyword+'&latitude=18.25248&longitude=109.512093&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5'
        )
        .then(res=>{
            // console.log(res.data.inside[0].restaurant_with_foods)
            res.data.inside[0].restaurant_with_foods.map(item=>{
                item.restaurant.isShow = false
                item.isMore = false
            })
            resolve(res.data.inside[0].restaurant_with_foods)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}
