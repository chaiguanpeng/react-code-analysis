/*takeEvery=>负责监听  put=>派发动作   all=>防止阻塞，类似promise.all，统一监听 call=>告诉saga，执行delay，并传入1000作为参数
* saga分为三类 1、rootsaga 2、监听saga 3、worker干活的saga
*
* */
import {takeEvery,put,all,call} from "redux-saga/effects";
import * as types from "./store/action-types";
const delay = ms=>new Promise((resolve,reject)=>{
   setTimeout(()=>{
       resolve()
   },ms)
});
function* add(dispatch,action) {
    yield call(delay,1000);
    //就是指挥saga中间件向仓库派发动作
    yield put({type:types.ADD});
}
function* watchAdd() {
    //监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的监听生成器
    yield takeEvery(types.ADD_ASYNC,add)
}
export function* rootSaga() {
    yield watchAdd()

}