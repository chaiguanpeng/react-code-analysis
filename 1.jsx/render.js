function createElement(type, props, ...childrens) {
    return {
        type: type,
        props: {
            ...props,
            children: childrens.length <= 1 ? childrens[0] : childrens
        }
    };
}


let jsxObj = createElement(
    'div',
    null,
    createElement(
        'h1',
        {style: {fontSize: '20px'}, className: 'box'},
        'hello'
    ),
    createElement(
        'h1',
        {style: {fontSize: '20px'}, className: 'box'},
        'world'
    ),
);

console.log("虚拟DOM",jsxObj);
//=>DOM的动态创建
function render(jsxObj, container) {
    //解构types和props解构props中的children
    let {type, props} = jsxObj, {children} = props;
    let newElement = document.createElement(type);//创建type类型的DOM元素
    for (let attr in props) { //循环props
        switch (attr) {
            case 'className': //attr为className,增加class="xxx"属性
                newElement.setAttribute('class', props[attr]);
                break;
            case 'style': //attr为styel，js实现增加样式
                let styleOBJ = props['style'];
                for (let key in styleOBJ) {
                    newElement['style'][key] = styleOBJ[key];
                }
                break;
            case 'children':
                let childrenAry = props['children'];
                //childrenAry为数组-> childrenAry,为str的话 ->[str] ,为空的话-> [].统一转变数组便于循环
                childrenAry = childrenAry instanceof Array ? childrenAry : (childrenAry ? [childrenAry] : []);
                childrenAry.forEach(item => {
                    if (typeof item === 'string') {
                        //文本节点，直接增加到元素中
                        newElement.appendChild(document.createTextNode(item));
                    } else {
                        //新的JSX元素，递归调用RENDER，只不过此时的容器是当前新创建的newElement
                        render(item, newElement);
                    }
                });
            default:
                newElement.setAttribute(attr, props[attr]);
        }
    }
    container.appendChild(newElement);
}

render(jsxObj, window.root, () => {
    console.log('哈哈');
});