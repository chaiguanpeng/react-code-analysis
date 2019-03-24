// 虚拟DOM元素的类
class Element{
    constructor(type,props,children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
//设置属性
function setAttr(node,key,value){ //node->ul的dom元素, key->class, value->'item'
    switch(key){
        case 'value':   //node是一个input或者textarea
            if(node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA'){
                node.value = value
            }else{
                node.setAttribute(key,value);
            }
            break;
        case 'style':
            node.style.cssText = value;    
        default:
            node.setAttribute(key,value);
            break;    
    }
}
//返回虚拟节点 ->object
function createElement(type,props,children){
    return new Element(type,props,children);
}
//render方法可以把vnode转化成真是的dom
function render(eleObj){
    let el = document.createElement(eleObj.type);
    for(let key in eleObj.props){
        //设置属性的方法
        setAttr(el,key,eleObj.props[key])  //el->ul的dom元素, key->class, eleObj.props[key]->'item'
    }
    //遍历儿子 如果是虚拟dom继续渲染，不是就代表的是文本节点
    eleObj.children.forEach(child=>{
        child = (child instanceof Element)?render(child):document.createTextNode(child);
        el.appendChild(child);
    })
    return el
}
//将元素插入到页面内
function renderDom(el,target){
    target.appendChild(el);
}

export {createElement,render,renderDom,Element,setAttr}




