/*
接口功能：首页的商家列表
接口参数：latitude：经度
longitude：纬度
offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
*/
const RESTAURANTS_API = '/restapi/shopping/v3/restaurants';


/*
接口功能：搜索页面的热点搜索
接口参数：/restapi/shopping/v3/hot_search_words?latitude=18.25248&longitude=109.512093
*/
const HOTSEARCH_API = '/restapi/shopping/v3/hot_search_words?latitude=18.25248&longitude=109.512093';


/*
接口功能：搜索关键字匹配的详情页
接口参数：/restapi/shopping/v2/restaurants/search?offset=0&limit=15&keyword=%E5%92%96%E5%96%B1%E9%A5%AD&latitude=18.25248&longitude=109.512093&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5
*/
const FOODDETAIL_API = '/restapi/shopping/v2/restaurants/search?offset=0&limit=15&keyword=%E5%92%96%E5%96%B1%E9%A5%AD&latitude=18.25248&longitude=109.512093&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5';

export default {
    RESTAURANTS_API,
    HOTSEARCH_API,
    FOODDETAIL_API
}