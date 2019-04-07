// es7 Object.defineProperty不支持监控数组(只能监控已有的属性)
// 像一层墙 可以在中途干你想干的事
function fn() {
    console.log(1)
}

let obj = {a:10};
let o = new Proxy(obj,{
    set(target,key,value){
        fn();
        // target[key] = value; return true  与下面写法一致
        return Reflect.set(target,key,value)
    },
    get(target,key){
        // return target[key]  与下面写法一样
        return Reflect.get(target,key)
    }
});
o.a = 100;
console.log(o.a);
console.log(o);
