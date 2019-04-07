let nowFn = null; //nowFn当前的autorun方法
let counter= 0;
 // 静态方法就是通过类来调用
 class Reaction {
     constructor(){
         this.id = ++counter;
         this.store = {};   //存储当前可观察对应的nowFn{id:[nowFn]}
     }
     run(){
         if(this.store[this.id]){
             this.store[this.id].forEach(w=>w())
         }
     }
     collect(){
        //  当前有需要绑定的函数 才进行绑定 没有的话 我就先不理他
        if(nowFn){
            this.store[this.id] = this.store[this.id] || [];
            this.store[this.id].push(nowFn);
        }
     }
     static start(handler){
         nowFn = handler;
     }
     static end(){
        nowFn = null
     }
 }
 // 收集autorun方法，帮我们创建当前属性和autorun关系
 export default Reaction
