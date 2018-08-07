export default {
    install(Vue){
        Vue.filter('formateImg',(value)=>{
            if(value.indexOf('jpeg')>-1){
                return 'http://fuss10.elemecdn.com/'+value + '.jpeg?imageMogr/format/webp/thumbnail/!65x65r/gravity/Center/crop/65x65/'
            }else {
                return 'http://fuss10.elemecdn.com/'+value + '.png?imageMogr/format/webp/thumbnail/!65x65r/gravity/Center/crop/65x65/'
            }
        })
    }
}