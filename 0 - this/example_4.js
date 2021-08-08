const student = {
    name: 'Lucas',
    fn: function () {
        return this
    }
}

console.log(student.fn() === student) // "fn" 被 "student" 调用，所以此时 this 指向 student