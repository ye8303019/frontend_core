'use strict';

// function foo(arg1){
//     let arg1 // 这里会报 Identifier 'arg1' has already been declared，这个是 ES6 let 的特性
// }
//
// foo()

function foo(arg1) {
    var arg1 = '222'; //这里不会报错
    console.log(arg1);
}

foo('111');
//# sourceMappingURL=example7.js.map