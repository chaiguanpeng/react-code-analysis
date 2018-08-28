- compose组合，在store/index.js中使用
> 最简单组合例子

```angular2html
// 先求和->转大写->求长度
function len(str) {
    return str.length
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function sum(a,b) {
    return a+b
}

let  compose=(...fns)=>{
   if(fns.length ===1){
       return fns[0];
   }
   return fns.reduce((a,b)=>(...args)=>{
      return a(b(...args))
   })
};
let r = compose(len,toUpperCase,sum)("a","b");
console.log(r);

```