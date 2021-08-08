function foo(){
    console.log(bar)
    var bar = 3
}

foo()

// 这段代码等价于，在这个情形下输出的是 undefined
// function foo(){
//     var bar
//     console.log(bar)
//     bar = 3
// }