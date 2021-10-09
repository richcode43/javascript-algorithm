// Questions1)
// Given an array of different numbers, remove all duplicated numbers, and
// return the numbers
// without duplicate as seen below.

// SOLUTION
let numArr = [2, 4, 5, 2, 6, 3, 5];
let numArr2 = [1, 3, 2, 1, 3, 2];
let numArr3 = [2, 8, 10, 7, 8, 2, 7];
let numArr4 = [6, 4, 5, 6, 4, 3];
let numArr5 = [4, 5, 1, 5, 4, 2];

// function removeDuplicate(arr) {
//     // creates new array
//     newarr = [];

//     //loop through array
//     for (let i = 0; i < arr.length; i++) {

//         //if the new array has the element in it, it should remove the element cause it's not unique
//         if (newarr.includes(arr[i])) {
//             newarr = newarr.filter(r => r != arr[i])
//         } else {
//             // else it should add it cause it's not in the new array (meaning it's unique)
//             newarr.push(arr[i])
//         }
//     }

//     return newarr;
// }
// console.log(removeDuplicate(numArr))

// OR

function duplicate(arr) {
    let unique = [];
    let duplicate = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        if (!temp.includes(arr[i])) {
            temp.push(arr[i])
        } else {
            duplicate.push(arr[i]);
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (!duplicate.includes(temp[i])) {
            unique.push(temp[i]);
        }
    }
    return unique;
}
console.log("solution for question 1" + "\n");
console.log(duplicate(numArr));
console.log(duplicate(numArr2));
console.log(duplicate(numArr3));
console.log(duplicate(numArr4));
console.log(duplicate(numArr5));
console.log("\n");


// Question2)
// Display the highest character in a given string as seen below;
// 1. Look { L = 1, o = 2, k = 1 }
// 2. Drill { D = 1, r = 1, i = 1 l = 2 }

// SOLUTION

function checkHighestChar(mainString) {

    // first force the string to lowercase so even if the input is uppercase it wont raise an error
    let convertedString = mainString.toLowerCase();
    let characterCheck = {}

    for (let character of convertedString) {
        // check the characterCheck string you created to see if it contains any character of the main string
        if (!characterCheck[character]) {
            characterCheck[character] = 1;
        } else {
            characterCheck[character]++;
        }
    }

    console.log(characterCheck)
}
console.log("solution for question 2" + "\n");
checkHighestChar("DRILL")
checkHighestChar("Look")
console.log("\n");

// Question3)
// Given an array of numbers, return the second smallest and second largest numbers in an array
// let fruits = ["pineapple", "pineapple", "apple", "apple", "watermelon", "cucumber", "pear", "watermelon"];


// SOLUTION
let numArray = [2, 3, 4, 9, 7];

// used if the number array is not sorted in ascending order
var sorted = numArray.sort(function(a, b) {
    return a - b;
});
let secondSmallest = sorted[1];
let secondBiggest = sorted[sorted.length - 2];

console.log("solution for question 3" + "\n");
console.log("The second smallest number and second lagest number is : " +
    "\[" + secondSmallest + ", " +
    secondBiggest + "\]");