import * as Types from "../action-types";
function counter(state = {number: 0}, action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {number:state.number+action.count};
        case Types.DECREMENT:
            return {number:state.number-action.payload.count};
    }
    return state
}
export default counter
