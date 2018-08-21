import * as Types from "../action-types"
// console.log(Types);
function counter(state={num:100},action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {num:state.num+action.count}
        case Types.DECREMENT:
            return {num:state.num-action.count}
    }
    return state
}
export default counter