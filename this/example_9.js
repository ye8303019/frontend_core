function Foo(){
    this.user = 'Lucas'
    const o = {}
    return o // 构造函数 显式 的返回了一个 空对象
}

const instance = new Foo(); // this 指针指向了 实例，实例又返回了一个 空对象，则 this 指向了 空对象
console.log(instance.user) // 空对象 没有 user