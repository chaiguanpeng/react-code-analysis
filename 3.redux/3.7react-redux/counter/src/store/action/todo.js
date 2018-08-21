import * as Types from "../action-types";
let obj ={
    addTodo(content){
        return {type:"ADD_TODO",text:content}
    }
};
export default obj;