let a = new Promise((resolve,reject)=>{
    resolve("hello")
});
a.then(data=>{
    console.log(data);
})