//管理员

import * as Types from "../action-types";
let initState = {
    type:'all',  //默认全部展示
    todos:[
        {isSelected:false,title:'今天吃药了嘛',id:1},
        {isSelected:true,title:'今天吃饭了嘛',id:2}
    ]
};
function reducer(state = initState, action) {
    switch (action.type) {
        case Types.ADD_TODO:
            return {...state,todos:[action.todo,...state.todos]};
        case Types.CHANGE_SELECTED:
            let todos = state.todos.map(item=>{
                if(item.id ===action.id){
                    item.isSelected =!item.isSelected
                }
                return item
            });
            return {...state,todos};
        case Types.DELETE_TODO:{ //加个{}防止todos重名  es6作用域
            let todos = state.todos.filter(item=>item.id!==action.id);
            return {...state,todos}
        }
        case Types.CHANGE_CURRENT_TYPE: //选项卡切换
            return {...state,type:action.val}
    }
    return state
}
export default reducer;