import React,{Component} from 'react'
import {render} from 'react-dom'
// let {Provider,Consumer} = React.createContext();
class Provider extends Component{
    render(){
        let value = this.props.value;
        let children = this.props.children;
        console.log('====================================');
        console.log(children);
        console.log('====================================');
        for(let i=0;i<children.length;i++){
            let child = children[i];
            if(child.type.toString().includes("Consumer")){
                console.log(React.cloneElement(child,{value}));
                
                return React.cloneElement(child,{value})
            }
        }
        // return null
    }
}
class Consumer extends Component{
    render(){
        console.log(this.props.children);
        
        return this.props.children(this.props.value)
    }
}
render(<Provider value = {{name:'zfpx'}}>
  <Consumer>
    {
      value=><div>{value.name}</div>
    }
    </Consumer>
    <div>11</div>
</Provider>,window.root);
