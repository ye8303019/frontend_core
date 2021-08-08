const foo = {
    name: 'Lucas',
    logName: function () {
        console.log(this.name)
    }
}

const bar = {
    name: 'Mike'
}

foo.logName.apply(bar) // 表示在 bar 上使用 logName 函数，此时 this 指向 bar