//Some people just have a first name; some people have first and last names and some people have first, middle and last names.

    //You task is to initialize the middle names (if there is any).

function initializeNames(name){
    let n = name.split(" ");
    if (n.length < 3) return name;
    for( let i = 1; i < n.length-1; i++){
        n[i] = n[i][0] + ".";
    }
    return n.join(" ");
}
console.log(initializeNames('George Warren Bush'))