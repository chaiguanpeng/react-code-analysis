let pathToRegexp = require('path-to-regexp');
let keys = [];
let regex = pathToRegexp("/user/:id/:name",keys,{end:false});
console.log(regex);
console.log(keys);
let name = keys.map(key=>key.name);
console.log(name);
let result = '/user/1/cgp'.match(regex);
console.log(result);
let params = name.reduce((memo,name,idx)=>{
    memo[name]=result[idx+1];
    return memo
},{});
console.log(params);