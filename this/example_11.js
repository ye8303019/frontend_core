const foo = {
    name: 'Lucas',
    fn: function () {
        setTimeout(function() { //匿名函数调用 this 指向 全局 window
            console.log(this.name)
        })
    }
}

foo.fn()