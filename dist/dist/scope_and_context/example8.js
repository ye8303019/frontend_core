'use strict';

var bar = function bar() {
    console.log('bar2');
};

function bar() {
    console.log('bar1');
}

bar(); // 执行 bar2 首先会预编译，预编译阶段，bar 函数会被声明，但是不会被赋值，等到代码执行阶段，则会开始复制，将第一行开始的赋值执行。所以这个会输出 'bar2'
// 这个场景主要是说明代码执行的2个阶段，
// 1 - 预编译：对变量的内存进行分配，对于变量，只会进行声明（VO 的创建）不会对他进行赋值，同时作用域在预编译阶段确定
// 2 - 代码执行 （VO 转换为 AO：active object）
//# sourceMappingURL=example8.js.map