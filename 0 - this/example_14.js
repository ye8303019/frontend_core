function foo (a) {
   this.a = a
}

const obj1 = {}

var bar = foo.bind(obj1) // bind 代表 this 指向 obj1，并返回一个 新定义 函数
bar(2) // 在 obj1 的 foo 中构造
console.log(obj1.a)

