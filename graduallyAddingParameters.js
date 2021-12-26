function add(...args) {
    return args.map((el,i) => el * (i + 1)).reduce((a, b) => a + b, 0)
}
console.log(add(2,3,5))