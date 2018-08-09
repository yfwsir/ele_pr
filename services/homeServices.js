import axios from 'axios';
// import API from './../src/API/API.js';
export function getAutoplayData(){
    return new Promise((resolve,reject)=>{
        axios.get(
            '/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
        ).then(response=>{
            //  console.log(response)
            let data =response.data[0].entries.map(item=>{
                    return{
                         imgname:item.name,
                         image_hash:item.image_hash,
                         id:item.id
                  }
           })
            resolve(data)
        }).catch(error=>{
            console.log('失败')
            console.log(error)
        })
    })
}
export function getScareBuyingData(){
    return new Promise((resolve,reject)=>{
        let reg = /\w*/g
        axios.get(
            '/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
        ).then(response=>{
             console.log(response.data[1].entries)
            let data =response.data[1].entries.map(item=>{
                    return{
                         imgname:item.name,
                         image_hash:item.image_hash,
                         id:item.id,
                         description:item.description,
                         population:item.more.split(',')[3].match(reg)[4]
                    }
           })
            resolve(data)
        }).catch(error=>{
            console.log('失败')
            console.log(error)
        })
    })
}