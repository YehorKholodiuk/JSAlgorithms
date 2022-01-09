//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

    //Examples
//"foefet" is an anagram of "toffee"

//"Buckethead" is an anagram of "DeathCubeK"

let isAnagram = function(test, original) {

    test = test.toLowerCase();
    original = original.toLowerCase();

    test = [...test];
    original = [...original];

    test.sort();
    original.sort();

    if(test.join("") === original.join(""))
        return true;

    return false;

};
console.log(isAnagram("foefet","toffee"))