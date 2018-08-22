import React from "react";
import {connect} from 'react-redux';
import actions from "../store/action" //actions是actionCreator组成的对象
class TodoHeader extends React.Component {
    getUnfinishCount = ()=>{
      return this.props.todos.filter(item=>item.isSelected == false).length
    };
    addItem = (e)=>{
        if(e.keyCode == 13){
            this.props.addTodo({id:Math.random(),title:e.target.value,isSelected:false})
        }
    };
    render() {
        return (
            <div>
                <h3>亲 您有{this.getUnfinishCount()}件事没完成</h3>
                <input type="text" className="form-control" onKeyUp={this.addItem}/>
            </div>
        )
    }
}
export default connect(state=>({...state}),actions)(TodoHeader)