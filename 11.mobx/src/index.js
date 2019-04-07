// 3、计数器用法 可以增加、当前值是奇数偶数
import {observable,autorun,action} from 'mobx'
import {observer} from "mobx-react"
import React from 'react'
import ReactDom from "react-dom"
// 统一的数据
class Store {
    @observable num=1;
    get type(){
        return this.num%2? '奇数':'偶数'
    }
    @action add = ()=>{
        this.num +=1
    }
}

let store = new Store();


@observer
class Counter extends React.Component{
    render(){
        return (<div>
            {store.num}
            <button onClick={store.add}>+</button>
            {store.type}
        </div>)
    }
}

ReactDom.render(<Counter store={store}></Counter>,window.root)










/* 2、基本用法
// observable 把普通的数据变成可观察的数据
import {observable,autorun,computed,action} from './mobx'

class Person {
    //类的装饰器
    @observable name = 'zfpx';
    @observable age = 9;
    @computed get allName(){ //不写@computed也可以用，真不过没缓存功能
        return this.name + '-' +this.age
    }
    @action.bound add = ()=>{ //批量更新机制 可以把this绑定死
        this.age +=1;
    }
}
let p = new Person;
autorun(()=>{
    console.log(p.allName);
});
p.name = 'jw';
// console.log(p.name);

p.add()
*/

/* 1、基础构建


// let o = observable({name:'zfpx',name:{name:1}}); // 可以把深层次代理
let o = observable({name:'zfpx',age:{num:9}});
o.name="hello";
// console.log(o.age.num);
//自动运行 会先运行一次 属性的变化后，会自动运行 autorun
autorun(()=>{
    console.log(o.age.num); //在这里肯定会调用get
});
o.age.num = 100;

*/



