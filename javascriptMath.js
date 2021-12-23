//You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

    //The function should contain at least 1 argument per set.
//calculate(1)(1) // should return 2
//calculate(1,1)(1) // should return 3
//calculate(1,1)(1,-1) // should return 2
//calculate(2,4)(3,7,1) // should return 17

function calculate() {
    let s = 0;
    for (let i=0; i < arguments.length; ++i)
        s+=arguments[i];
    return function (){let t = 0;
        for (let i=0; i < arguments.length; ++i)
            t+=arguments[i];
        return s+t;
    }
}
console.log(calculate(2,4)(3))