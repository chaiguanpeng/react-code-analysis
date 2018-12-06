let initState =  {
    number: 0
};

function counter(state =initState , action) {
    switch (action.type) {
        case 'increment':
            return {number:state.number+action.count};
        case 'decrement':
            return {number:state.number-action.count};
        default:
                return state
    }
}
export default counter
