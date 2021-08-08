function Foo(){
    this.bar = 'Lucas' // 定义实例变量 bar
}

const instance = new Foo() // 构造实例，this 指向 new 出来的 实例
console.log(instance.bar) // 返回实例 的 bar