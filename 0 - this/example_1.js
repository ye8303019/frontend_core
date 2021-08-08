function f1(){
    console.log(this)
}

function f2(){
    'use strict'
    console.log(this)
}

f1() // 非严格模式下，指向 window
f2() // 严格模式下，指向 undefined