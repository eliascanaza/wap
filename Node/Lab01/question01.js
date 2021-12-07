/**
 * 
 * @returns Even numbers
 */
Array.prototype.even = function () {
    let arr = this;
    arr = arr.filter((elem)=>elem%2 === 0);
    return arr;
}
let arr = [1,2,3,4,5,6,7,8].even();
console.log("Even: ");
console.log(arr);

/**
 * 
 * @returns Odd numbers
 */
Array.prototype.odd = function() {
    let arr = this;
    arr = arr.filter((elem)=>elem%2 != 0);
    return arr;
}
let arr2 = [1,2,3,4,5,6,7,8].odd(); 
console.log("Odd: ");
console.log(arr2);