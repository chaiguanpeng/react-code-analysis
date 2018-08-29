function * thing() {
    let a = yield 1;
    console.log("a",a);
    let b = yield 2;
    console.log(b);
    return b;
}
let it = thing();
console.log(it.next());
console.log(it.next('2000'));
console.log(it.next('4000'));