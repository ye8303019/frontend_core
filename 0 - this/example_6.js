const o1 = {
    text: 'o1',
    fn: function () {
        return this.text
    }
}

const o2 = {
    text: 'o2',
    fn: function () {
        return o1.fn()
    }
}

const o3 = {
    text: 'o3',
    fn: function () {
        var fn = o1.fn
        return fn()//此处直接返回了一个函数，所以最后调用是 window 调用
    }
}

console.log(o1.fn())
console.log(o2.fn())
console.log(o3.fn())