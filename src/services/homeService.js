import API from '../API/API'
import axios from 'axios'

//请求首页餐馆的信息
export function restaurantData(page){
    return new Promise(resolve=>{
        axios.get(API.RESTAURANTS_API,{
            params:{
                offset:page
            }
        }
        
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
        axios.get(API.FOODDETAIL_API+'&keyword='+keyword
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



// 首页轮播进去的详情页的特卖数据
export function shopDetailSaleData(){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=18.25248&longitude=109.512093'
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


// 首页轮播进去的美食详情页顶部导航id
export function shopNavData(id){
    return new Promise(resolve=>{
        axios.get(API.SHOPNAV_API+'&entry_id=20004689')
        .then(res=>{
            // console.log(res)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}


// 首页轮播进去的详情页商家列表数据
export function shopDetailData(id,page){
    return new Promise(resolve=>{
        axios.get(API.SHOPDETAILDATA_API,
            {
                params:
                    {
                        offset : page,
                        restaurant_category_ids:id
                    }
            }
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
