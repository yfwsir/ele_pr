export default {
    install(Vue){
        Vue.filter('formateImg',(value)=>{
            if(value.indexOf('jpeg')>-1){
                return 'http://fuss10.elemecdn.com/'+value + '.jpeg'
            }else {
                return 'http://fuss10.elemecdn.com/'+value + '.png'
            }
        })
    }
}
