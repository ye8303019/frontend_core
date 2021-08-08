'use strict';

function bar() {
    var b = 'bar';
}
function foo() {
    console.log(b); // 当前作用域下没有 b，则向外作用域查找，依旧未发现 b，则报 ReferenceError: b is not defined 错误
}
foo();
//# sourceMappingURL=example2.js.map