//1、 类装饰 放在index.js中解析，
@add
class My {

}
function add(target) { //修饰类的时候 target指代的就是类本身
    target.flag = 'ok'
}

console.log(My.flag);


//2、属性装饰
class Circle {
    @readonly PI = 3.14
}
function readonly(target,key,descriptor) {
    // console.log(descriptor.initializer());  initializer方法返回定义的属性值
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);
    descriptor.writable = false;
    // return descriptor  默认返回
}
let c = new Circle();
c.PI = 100;


//3、 原型上的方法的装饰器
class Person{
    @say
    say(){
        console.log("哈哈");
    }
}
function say(target, key, descriptor) { //target指原型  默认把descriptor返回
    let oldSay = descriptor.value;
    descriptor.value = function () {
        console.log("start say");
        oldSay();
        console.log("end say");
    }
}

let p = new Person();
p.say();
