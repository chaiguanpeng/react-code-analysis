//可共享资源是万恶之源
const obj1 = {user:{name:'zfpx'}};
const obj2 = obj1;
obj2.user.name = "zfpx2";
console.log(obj1,obj2);

//is 用法
let {is,fromJS} = require("immutable");
let obj3 = fromJS({name:"zfpx",age:9});
let obj4 = fromJS({name:"zfpx",age:9});
console.log(Object.is(obj3, obj4), is(obj3, obj4));
