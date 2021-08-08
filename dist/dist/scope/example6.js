'use strict';

function foo() {
    var arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arg2;
    var arg2 = arguments[1];
    // 这边的定义代表 当不传递第一个参数的时候，第一个参数会默认使用第二个参数的值作为自己的值
    console.log(arg1 + ' ' + arg2);
}

foo('111', '222'); //这里会输出 111 222， 因为这里即传了第一个值，也又第二个值
foo(undefined, '222'); //这里会输出 referenceError: arg2 未定义，因为此时 arg2 还未声明，arg1=arg2 是一个TDZ
//# sourceMappingURL=example6.js.map