const foo = {
    name: 'Lucas',
    fn: function () {
        setTimeout(() => { // 箭头函数 代表 this 指向其 所属的 对象
            console.log(this.name)
        })
    }
}

foo.fn()