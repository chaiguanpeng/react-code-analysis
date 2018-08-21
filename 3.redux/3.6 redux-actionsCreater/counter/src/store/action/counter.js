import * as Types from "../action-types";
{/*store.dispatch({type:"INCREMENT",count:1})*/}
function add(count) {
    return  {type:Types.INCREMENT,count}
}
function minus(count) {
    return  {type:Types.DECREMENT,count}
}
export {add,minus}