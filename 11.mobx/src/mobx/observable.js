import Rection from './reaction'
function deepProxy(val,handler){
    if(typeof val !== 'object') return val;
    // {name:'zfpx',age:{num:1}}; 后序代理
    for(let key in val){ //从后往前依次实现代理功能
        // console.log(key,val);
        val[key] = deepProxy(val[key],handler)
    }
    return new Proxy(val,handler())
}
// 创建代理
function createObservable(val){ //val就是{}
    //声明一个专门用来代理的对象
    let handler = ()=>{
        let reaction = new Rection();
      return {
          set(target,key,value){
              if(key === 'length') return true;
              // r是布尔值
              let r = Reflect.set(target,key,value);
              reaction.run();
              // alert(1);
            return r
          },
          get(target,key){
              reaction.collect();
            return Reflect.get(target,key)
          }
      }
    };
    return deepProxy(val,handler)

}
let observable = (target,key,descriptor)=>{
    if(typeof key === 'string'){ //是通过装饰器实现的,先把装饰的对象深度代理
        let v = descriptor.initializer();
        v = createObservable(v);
        let reaction = new Rection();
        return {
            enumerable:true,
            configurable:true,
            get(){
                reaction.collect();
                return v;
            },
            set(value){
                v = value;
                reaction.run();
            }
        }
    }


    // 需要讲这个目标对象 进行代理操作 创建成可观察对象
    return createObservable(target)
};
export default observable
