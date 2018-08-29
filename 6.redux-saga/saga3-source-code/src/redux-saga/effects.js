/*这里所有的函数都会返回一个effect.effect就是一个普通对象
* effect对象都有一个type属性
 */
function take(actionType) {
    return {
        type:"take",
        actionType
    }
}
function put(action) {
    return {
        type:'put',
        action
    }
}
function fork(worker) {
    return {
        type:"fork",
        worker
    }
}
function call(fn, ...args) {
    return {
        type:'call',
        fn,
        args
    }
}


//监听每一个动作类型,当次动作发生的时候执行对应的worker
//takeEvery他会单开一个任务,并不会阻塞当前的saga
function* takeEvery(actionType,worker) {
    yield fork( function * () {
        while (true) {
            let action = yield take(actionType);
            yield  worker(action)
        }
    })
}
//takeEvery的结果是一个迭代器
export {
    take,
    put,
    takeEvery,
    call
}