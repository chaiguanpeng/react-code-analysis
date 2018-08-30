let immutable = require('immutable');
let {Map,List,fromJS} = immutable;

let arr1 = List([1,2,3,4]);
let arr2 = arr1.push(5);
let arr3 = arr1.map(item=>item*2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
// 1、uppdate
let arr4 = arr1.update(1,val=>val+1);
console.log(arr4);
// 2、delete last

