//可共享资源是万恶之源
const obj1 = {user:{name:'zfpx'}};
const obj2 = obj1;
obj2.user.name = "zfpx2";
console.log(obj1,obj2);