import * as Types from "../action-types";
let actions = {
    add(num){
        return {type:Types.INCREMENT,count:num}
    },
    minus(num){
        //支持失败
        return {
            type:Types.DECREMENT,
            payload: new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        reject({count:num})
                    },1000)
                })
        }


        // 返回一个Promise resolve的结果会被进行派发,
        // 只支持成功的返回，失败是不处理的
        // return new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve({type:Types.DECREMENT,count:num})
        //     },1000)
        // })
    }
};
export default actions