function createSagaMiddleware() {
    function sagaMiddleware({dispatch,getState}) {
        function createChannel() { //管道意思
            //taker用一次就销毁
            let takers={};
            function subscribe(actionType,cb) {
                takers[actionType] = cb;
            }
            function publish(action) {//发布 {type:ADD}
                //看看有没有人监听
                debugger;
                let taker = takers[action.type];
                if(taker){ //如果有执行 监听函数并且删除监听函数
                    let tmp = taker;
                    taker = null;
                    tmp(action)
                }
            }

            return {subscribe,publish}
        }
        let chanel = createChannel();
        //run要负责把generator执行完毕
        function run(generator) {
            let it = generator();
           function next(input) {
               //effect值为 {type:"take",ADD_ASYNC:"ADD_ASYNC"}
               let {value:effect,done} = it.next(input);
               if(!done){ //如果迭代器没有完成
                   switch (effect.type) {
                       //take是要等待一个动作发生，相当于注册一个监听
                       case "take":
                            let {actionType} = effect;
                           chanel.subscribe(actionType,next)
                           break;
                       case "put":
                            let {action} = effect;
                            dispatch(action);
                            next(action);
                            break;
                       default:
                           break;
                   }
               }
           }
           next()
        }
        sagaMiddleware.run = run;
        return function (next) {
            return function (action) {
                chanel.publish(action);
                next(action);
            }

        }
    }
    return sagaMiddleware;
}
export default createSagaMiddleware