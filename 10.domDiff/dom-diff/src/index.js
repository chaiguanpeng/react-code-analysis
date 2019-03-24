import {createElement,render,renderDom} from './element';
import diff from "./diff";
import patch from "./patch";
let vertualDom1  = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['a']),
    createElement('li',{class:'item'},['b']),
    createElement('li',{class:'item'},['c'])
])
let vertualDom2  = createElement('ul',{class:'list-group'},[
    createElement('li',{class:'item2'},['1']),
    createElement('li',{class:'item'},['b']),
    createElement('div',{class:'item'},['3'])
])
// 把虚拟dom转化成真实dom,渲染到页面
let el = render(vertualDom1);
renderDom(el,window.root);
console.log('vertualDom1 :', vertualDom1);
console.log('el :', el);
let patches = diff(vertualDom1,vertualDom2);
console.log('patches', patches);

//给元素打补丁 重新更新视图
patch(el,patches);


//此方法不足1 如果平级元素有互换 那么会导致重新渲染
//此方法不足2 新增节点也不会更新  需要靠index




/**DOM Dff比较两个虚拟dom区别 比较两个对象的区别 
 * 1、dom diff作用 根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁更新到
 * 2、
 * */

