var fn = null
const foo = () => {
    var a = 2
    function innerFoo() {
        console.log(a)
    }
    fn = innerFoo
}

var bar = () => {
    fn()
}

foo() // 正常来说，在 foo 执行完成后，上下文会销毁以及被GC回收，但是因为 innerFoo 赋值给了 fn，所以 innerFoo 中的变量 a 依旧能够被访问，也正因为如此，a 未被回收
bar() // 此时当再调用 bar 的时候， 可以输出 2