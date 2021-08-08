function numGenerator(){
    let num = 1
    return () => {
        num ++
        console.log(num)
    }
}

var getNum = numGenerator() // 闭包简单理解就是： 1 - 在内层函数中引用了外层函数作用域下的变量 2 - 内层函数在全局环境下可访问
getNum() //输出2
getNum() //输出3
getNum() //输出4
