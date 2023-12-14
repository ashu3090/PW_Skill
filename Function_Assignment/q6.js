function add(a){
    return function(b)
    {
        return a+b
    }
}

console.log(`Sum of two number is ${add(4)(6)}`)