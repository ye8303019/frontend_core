const foo = {
    bar: 10,
    fn: function () {
        console.log(this)
        console.log(this.bar)
    }
}

var fn = foo.fn;
fn() // 最终调用方是 全局 window