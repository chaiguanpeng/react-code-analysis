import * as Types from "../action-types";
let actions = {
    add(num){
        /*redux-thunk允许你actionCreator返回的是一个函数,
        * 如果是函数，会让函数执行 并且把dispatch的权利转交给你，
        * 你可以在想要的时机派发事件
         */
        return (dispatch,getState)=>{
            setTimeout(function () {
                dispatch({type:Types.INCREMENT,count:num})
            },1000)
        }
    },
    minus(num){
        return {type:Types.DECREMENT,count:num}
    }
};
export default actions