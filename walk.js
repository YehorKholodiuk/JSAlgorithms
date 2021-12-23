// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0```


// // You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity
// to go for a short walk.The city provides its citizens with a Walk Generating App on their
// phones -- everytime you press the button it sends you an array of one- letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']).You know it takes you one minute
// to traverse one city block, so create a function that will return true if the walk the app
// gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
// of course, return you to your starting point. Return false otherwise.

// // Note: you will always receive a valid array containing a random assortment of direction
// letters ('n', 's', 'e', or 'w' only).It will never give you an empty array (that's not a walk,
// that's standing still!).

walk1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
walk2 = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']


function walkMe (directionsArray) {
    let meAt1 = 0;
    let meAt2 = 0;
    directionsArray.forEach(element => {
        if(element == 'n') element = [0, 1];
        if(element == 's') element = [0, -1];
        if(element == 'e') element = [1, 0];
        if(element == 'w') element = [-1, 0];

        meAt1 += element[0];
        meAt2 += element[1];
    });

    return meAt1 === 0 && meAt2 === 0;
}

console.log(walkMe(walk1))
console.log(walkMe(walk2))