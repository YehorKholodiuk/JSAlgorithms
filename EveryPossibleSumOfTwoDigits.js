//Given a long number, return all the possible sum of two digits of it.

    //For example, 12345: all possible sum of two digits from that number are:

    //[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
//Therefore the result must be:

    //[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

function digits(num){
    { const split = String(num)
        .split("")
        .map((digit) => Number(digit));
        const sums = [];
        for (let first = 0; first < split.length; first++) {
            for (let second = first + 1; second < split.length; second++) {


                sums.push(split[first] + split[second]);
            }
        }

        return sums;
    }
}
console.log(digits(34))