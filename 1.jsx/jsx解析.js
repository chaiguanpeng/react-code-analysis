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
        'ul',
        null,
        createElement(
            'li',
            null,
            'AA'
        ),
        createElement('li', null)
    )
);

//=>DOM的动态创建
function render(jsxObj, container, callback) {
    let {type, props} = jsxObj,
        {children} = props;
    let newElement = document.createElement(type);
    //=>属性和子元素的处理
    for (let attr in props) {
        if (!props.hasOwnProperty(attr)) break;
        switch (attr) {
            case 'className':
                newElement.setAttribute('class', props[attr]);
                break;
            case 'style':
                let styleOBJ = props['style'];
                for (let key in styleOBJ) {
                    if (styleOBJ.hasOwnProperty(key)) {
                        newElement['style'][key] = styleOBJ[key];
                    }
                }
                break;
            //=>CHILDREN
            case 'children':
                let childrenAry = props['children'];
                childrenAry = childrenAry instanceof Array ? childrenAry : (childrenAry ? [childrenAry] : []);
                childrenAry.forEach(item => {
                    if (typeof item === 'string') {
                        //=>字符串:文本节点，直接增加到元素中
                        newElement.appendChild(document.createTextNode(item));
                    } else {
                        //=>字符串:新的JSX元素，递归调用RENDER，只不过此时的容器是当前新创建的newElement
                        render(item, newElement);
                    }
                });
            default:
                newElement.setAttribute(attr, props[attr]);
        }
    }

    container.appendChild(newElement);
    callback && callback();
}
render(jsxObj, window.root, () => {
    console.log('哈哈');
});