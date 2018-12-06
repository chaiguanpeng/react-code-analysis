import axios from "axios";
let actions = {
    add(num){
        /*redux-thunk允许你actionCreator返回的是一个函数,
        * 如果是函数，会让函数执行 并且把dispatch的权利转交给你，
        * 你可以在想要的时机派发事件
         */
        return async (dispatch,getState)=>{
            //数据是5-10的随机 mock数据
           let result = await axios.get('https://www.easy-mock.com/mock/5b7bdbf95b040679770764fb/example/mock');
           let {num} = result.data;
            dispatch({type:'increment',count:num})
        }
    },
    minus(num){
        return {type:'decrement',count:num}
    }
};
export default actions
