function bar(){
    var b = 'bar'
    function foo(){
        console.log(b) // b 的声明是在上层 bar 函数中获取，此处可以输出 'bar'
    }
    foo()
}

bar()