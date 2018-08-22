import * as Types from "../action-types";
//actionCreater的对象
let actions = {
    addTodo(todo){ //todo是要添加的内容 形如{title,id,isSelected}
        return {type:Types.ADD_TODO,todo}
    },
    changeSelected(id){ //改变选择状态。告诉我当前是哪个checkBox更改
        return {type:Types.CHANGE_SELECTED,id}
    },
    deleteTodo(id){ //根据id删除
        return {type:Types.DELETE_TODO,id}
    },
    changeType(val){ //选项卡类型
        return {type:Types.CHANGE_CURRENT_TYPE,val}
    }
};
export default actions