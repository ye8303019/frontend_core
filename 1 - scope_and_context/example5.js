function foo(){// TDZ(Temporal Dead Zone)的开头
    console.log(bar)
    let bar = 3// TDZ 的结尾，在 TDZ 的范围以内在声明变量之前访问变量，是无法获得的, 会报 ReferenceError: bar is not defined
}

foo()

// 正确的写法应该是如下所示，先在TDZ的范围以内，声明并赋值变量，之后再使用
function bar(){
    let item = 3
    console.log(item)
}

bar()