import * as Types from "../action-types";
let actions = {
    add(num){
        return {type:Types.INCREMENT,count:num}
    },
    minus(num){
        return {type:Types.DECREMENT,count:num}
    }
};
export default actions