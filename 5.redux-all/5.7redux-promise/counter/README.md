- 返回一个Promise resolve的结果会被进行派发,只支持成功的返回，失败是不处理的
> src/store/actions/counter.js

```angular2html
 return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                 resolve({type:Types.DECREMENT,count:num})
             },1000)
         })

```
- 第二种可以支持失败，需要修改reducers/counter.js 多一个.payload
> src/store/actions/counter.js

```angular2html

return {
            type:Types.DECREMENT,
            payload: new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        reject({count:num})
                    },1000)
                })
        }
```
