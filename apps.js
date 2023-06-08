/* JavaScript Functions Lab */

// 1.
function maxOfTwoNumbers(x, y) {
    return  x >= y ? x : y;
}
console.log(maxOfTwoNumbers(99, 100)); // expect 100

// 2.
function maxOfThree(x, y, z) {
    return x >= y && x >= z ? x : y >= x && y >= z ? y : z;
}
console.log(maxOfThree(49, 50, 51));

// 3. 
function isCharAVowel(c) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(c);
}
console.log(isCharAVowel("a"));

// 4.
function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([2, 4, 5])); // should return 11

// 5.
function multiplyArray(arr) {
    let product = 1;
    for (const num of arr) {
        product *= num;
    }
    return product;
}
console.log(multiplyArray([2, 4, 5])); // should return 40

// 6.
function numArgs(...args) {
    return args.length;
}
console.log(numArgs(1,2,4,1,5,1,1)); // should return 7

// 7.
function reverseString(str) {
    return str.split("").reverse().join(""); // turn string into array, reverse array, turn array into string
}

// 8.
function longestStringInArray(arr) {
    // let longest = "";
    // for (const str of arr) {
    //     if (str.length > longest.length) {
    //         longest = str;
    //     }
    // }
    // return longest;
    return arr.length !== 0 ? arr.filter(str => str.length === Math.max(...arr.map(str => str.length)))[0] : null;
}
console.log(longestStringInArray(["hello", "goodbye", "hi", "bye"])); // should return "goodbye"

// 9. 
function stringsLongerThan(arr, len) {
    // let returnArr = [];
    // for (const str of arr) {
    //     if (str.length > len) {
    //         returnArr.push(str);
    //     }
    // }
    // return returnArr;       
    
    return arr.filter(str => str.length > len);
}
console.log(stringsLongerThan(["hello", "goodbye", "hi", "bye"], 3)); // should return ["hello", "goodbye"]

module.exports = {
    maxOfTwoNumbers,
    maxOfThree,
    isCharAVowel,
    sumArray,
    multiplyArray,
    numArgs,
    reverseString,
    longestStringInArray,
    stringsLongerThan
};