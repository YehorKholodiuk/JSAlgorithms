//Write a function which for given number returns true if number is palindrome or false if it is not.

    //A number is a palindrome if when the digits are reversed it is the same number.

    //Ex. 121 is a palindrome

//121 -> 121

//Ex. 345 is not a palindrome

//345 => 543

function isPalindromic(a){
    let factor = 1;
    while (a / factor >= 10){
        factor *= 10;
    }
    while (a) {
        let first = Math.floor(a / factor);
        let last = a % 10;

        if (first != last){
            return false;
        }

        a = Math.floor((a % factor) / 10);

        factor = factor / 100;
    }
    return true;
}
console.log(isPalindromic("121"))

//isPalindromic=a=>[...""+a].reverse().join('') === a