/*这里所有的函数都会返回一个effect.effect就是一个普通对象
* effect对象都有一个type属性
 */
function take(acceptType) {
    return {
        type:"take",
        acceptType
    }
}
function put(action) {
    return {
        type:'put',
        action
    }
}
export {
    take,
    put
}