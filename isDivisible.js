//Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

const isDivisible = (div, ...divisors) => divisors.every(divisor => div % divisor === 0)
console.log(isDivisible(9,8))