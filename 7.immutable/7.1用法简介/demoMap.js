let immutable = require('immutable');
let {Map,List,fromJS} = immutable;
let obj1 = fromJS({name:"zfpx1",age:9,home:{name:'北京'}});
let obj2 = obj1.set("name","zfpx2");
console.log(obj1);
console.log(obj2);

//1、查看数量
console.log("size",obj1.size);
console.log("count",obj1.count());
//2、Map只能修改一层，fromjs可以修改多层  setIn
let obj3 = obj1.setIn(["home","name"],"山东");
console.log("obj3",obj3);
// 3、取值 get  getIn
console.log("get",obj1.get("name"),obj1.getIn(["home","name"]));
//4、更新 update updateIn
let obj4 = obj1.update("age",val=>val+2);
console.log(obj4);
let obj5 = obj1.updateIn(["home","name"],val=>val+"hello");
console.log(obj5);
//5、删掉某个值 delete
let obj6 = obj1.deleteIn("home");
console.log("delete",obj6);
//6、清空  clear
let obj7 = obj1.clear();
console.log("clear",obj7);
//7、合并 merge
let obj8 = obj1.merge({name:'zfpxn',sex:'男'});
console.log("obj8",obj8);
//8、把immutable转成普通对象
console.log(obj8.toJS());
console.log(obj8.toJSON());
console.log(obj8.toObject());

//9 keys、values、entries
console.log("------");
console.log(...obj8.keys());
console.log(...obj8.values());
console.log("-");
console.log(...obj8.entries());

// //简单实现原理
// function Map(obj) {
//     obj.set = function (key, value) {
//         return {...obj,[key]:value}
//     }
//     return obj
// }

