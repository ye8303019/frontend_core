function Foo(){
    this.user = 'Lucas'
    return 1 // 构造函数 显式 的返回了一个 基本数据类型
}

const instance = new Foo(); // this 指针指向了 实例，虽然实例又返回了一个 基本数据类型，但是基本数据类型的返回不影响 this 的指向，此时 this 依旧指向 new 出来的 实例
console.log(instance.user)