//Create a function removeO to remove all of the letters o in a string.
    //There's no need to worry about uppercase letters.

//Examples:
    //"hello world" --> "hell wrld"
//"bono" --> "bn"

function removeO(string){
    let res = string.replace(/o/g,'');
    return res;

}
console.log(removeO("The World is not enough"))