this.a = 123
function foo (a) {
   return a => {
      console.log(this.a)
   }
}

const obj1 = {
   a: 2
}

const obj2 = {
    a: 3
}


const myFoo = foo.call(obj1) // 返回 箭头函数 所声明的 函数
myFoo.call(obj2) // 箭头函数 一旦声名 则不能被改变绑定，所以此处依旧是 在 obj1 下面调用 this.a

