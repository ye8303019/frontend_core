const person = {
    name: 'Lucas',
    brother: {
        name: 'Mike',
        fn: function () {
            return this.name
        }
    }
}

console.log(person.brother.fn()) // this 指向最后调用他的 brother，所以此处 name 是 mike