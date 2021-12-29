function heron(a, b, c) {
    const square = (a + b + c)/2;
    return Math.sqrt(square * (square - a) * (square - b) * (square - c));
}
console.log(heron(2,3,4))