'use strict';

var b = 'bar';
function foo() {
    console.log(b); //在 foo 的作用域中没有找变量 b，所以向外扩大作用域查找，在全局下找到 b
}
foo();
//# sourceMappingURL=example1.js.map