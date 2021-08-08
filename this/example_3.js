const foo = {
    bar: 10,
    fn: function () {
        console.log(this)
        console.log(this.bar)
    }
}

foo.fn() // 最终由 foo 调用