//Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

    //if such letters are two or more, choose the one that appears in the string( earlier.

    //For example:

    //('my mom loves me as never did', 't') => 'ty tot loves te as never did'
//'real talk bro', 'n') => 'neal talk bno'
//('great job go ahead', 'k') => 'grekt job go khekd'

function replaceCommon(string, letter) {

    const obj={};
    let max=0;
    let maxChar='';
    for(let el of string)
    {
        if(el!== ' ')
        {
            if(obj[el]!==undefined)
                obj[el]=obj[el]+1;
            else
                obj[el]=1;
        }
    }

    for(let el in obj)
    {
        if(obj[el]>max)
        {
            max=obj[el];
            maxChar=el;
        }
    }

    let flagsYouWant = 'gi';
    let dynamicRegExp = new RegExp(`${maxChar}`, flagsYouWant)

    return string.replace(dynamicRegExp, letter);
}
console.log(replaceCommon('my mom loves me as never did', 'l'))