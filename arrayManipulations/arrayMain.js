// Questions1)
// Given an array of different numbers, remove all duplicated numbers, and
// return the numbers
// without duplicate as seen below.

// SOLUTION
let numberArr = [2, 4, 5, 2, 6, 3, 5];

function removeDuplicate(arr) {
    // creates new array
    newarr = [];

    //loop through array
    for (let i = 0; i < arr.length; i++) {

        //if the new array has the element in it, it should remove the element cause it's not unique
        if (newarr.includes(arr[i])) {
            newarr = newarr.filter(r => r != arr[i])
        } else {
            // else it should add it cause it's not in the new array (meaning it's unique)
            newarr.push(arr[i])
        }
    }

    return newarr;
}
console.log(removeDuplicate(numberArr))


// Question3)
// Given an array of numbers, return the second smallest and second largest numbers in an array
// let fruits = ["pineapple", "pineapple", "apple", "apple", "watermelon", "cucumber", "pear", "watermelon"];


// SOLUTION
let numArr = [2, 3, 4, 9, 7];

// used if the number array is not sorted in ascending order
var sorted = numArr.sort(function(a, b) {
    return a - b;
});
let secondSmallest = sorted[1];
let secondBiggest = sorted[sorted.length - 2];

console.log("The second smallest number and second lagest number is : " +
    "\[" + secondSmallest + ", " +
    secondBiggest + "\]");