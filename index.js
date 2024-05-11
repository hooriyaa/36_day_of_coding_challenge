// QUESTION 106:
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let isLeap = isLeapYear(2024);
console.log(isLeap);
//  QUESTION 107:
function isDivisibleBy2And4(num1) {
    return num1 % 2 === 0 && num1 % 3 === 0;
}
let getValue = isDivisibleBy2And4(15); // false
let getValue1 = isDivisibleBy2And4(18); //true
console.log(getValue);
console.log(getValue1);
//  QUESTION 108:
function compareStrings(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
let result1 = compareStrings("Hooriya", "Fareed");
let result2 = compareStrings("Hello", "World");
let result3 = compareStrings("Mahnoor", "mahnoor");
console.log(result1);
console.log(result2);
console.log(result3);
export {};
