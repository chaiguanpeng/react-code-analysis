class Person {
    constructor(age){
        this.age=age;
    }
}
class Child extends Person{
    constructor(name,age) {
        super(age);
        this.name = name;

    }

}
let c = new Child('张三',10);
console.log(c);
