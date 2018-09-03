- effects不能改变状态，只能通过派发动作给reducers
- 多个module也可以，会变成
```angularjs
{
    counter:{number:0},
    todo:{arr:[]}
}
app.model({
    namespace:"todo",
    state:{
        arr:[]
    }
});
app.model({
    namespace:"counter",
    state:{
        number:0
    }
});
```