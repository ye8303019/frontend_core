function foo (a) {
    console.log(this.a)
}

const obj1 = {
    a: 1,
    foo: foo
}

const obj2 = {
    a: 2,
    foo: foo
}

obj1.foo.call(obj2) // 等于 this 指向 obj2
obj2.foo.call(obj1) // 等于 this 指向 obj1

// 当前函数也等于
function foo2 () {
    console.log("=======" + this.a)
}

const obj3 = {
    a: 3
}

const obj4 = {
    a: 4
}

foo2.call(obj3) // 等于 this 指向 obj3
foo2.call(obj4) // 等于 this 指向 obj4

