//takeEvery=>负责监听  put=>派发动作   all=>防止阻塞，类似promise.all，统一监听
import {takeEvery,put,all} from "redux-saga/effects";
import * as types from "./store/action-types";
//saga分为三类 1、rootsaga 2、监听saga 3、worker干活的saga
function* add() {
    //就是指挥saga中间件向仓库派发动作
    yield put({type:types.ADD});
}
function* logger(action) {
    console.log(action);
}
function* watchLogger() {
    //监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的监听生成器
    yield takeEvery("*",logger)
}
function* watchAdd() {
    //监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的监听生成器
    yield takeEvery(types.ADD_ASYNC,add)
}
export function* rootSaga() {
    yield all([watchAdd(),watchLogger()])

}