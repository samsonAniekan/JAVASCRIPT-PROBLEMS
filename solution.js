// Write a function myIndexOf(arr, target) that takes in an array and target value as args.
// The function should return the first index where the target is found in the array.
// If the target is not found, it should return -1. Solve this without using Array.indexOf.

// loop through array
// if target arr includes target

function myIndexOf(arr, target) {
    let index;
    index = arr.findIndex(num => num === target);
    return index
}

console.log(myIndexOf(['a', 'b', 'c', 'c'], 'c')); // 2


// Write a function twoSum(arr, target) that accepts an array and a target number as args.
// The function should a return a booleanindicating
//  if two distinct numbers of the array add up to the target value.
//  You can assume that input array contains only unique numbers.


function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        //let elem = arr[i];
        //console.log(elem)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true
            }
        }
    }

    return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false

// Write a function fizzBuzz(max) that accepts a number as an arg.
// he function should return an array containing all positive numbers less
//  than max that are divisible by either 3 or 5, but not both.


function fizBuzz(max) {
    let arr = [];

    for (let i = 1; i < max; i++) {
        //console.log(i)
        //console.log(num)
       if (i % 3 === 0 && i % 5 === 0) {
         arr.push()
       } else if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
       }
   }

     return arr;
}

console.log(fizBuzz(12))
console.log(fizBuzz(20))



// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
// steps: define the vowel variable
// define a for loop
// start the count from the last index of the word
// check to see if the word includes vowel
// if you encounter any vowel
// stop and remove that vowel using the slice method at that index

 function removeLastVowel(word) {
    let vowels = "aeiou";


    for (let i = word.length - 1; i >= 0; i-- ) {
        let char = word[i];
        //console.log(char)
        if (vowels.includes(char)) {
           return  word.slice(0, i) + word.slice(i + 1);
        }
     }
}
console.log(removeLastVowel("bootcamp"))



//  Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments.
//  The functions should return the smallest number that is divisible by both num1 and num2.
// steps includes define a variable that stores the product of the totla numbers
// using a for loop check to see if the the loop variable is divisible by numbers if it does immediately return the loop variable

function leastCommonMultiple(num1, num2) {
    let totalNum = num1 * num2;

    for (let i = 1; i <= totalNum; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}
console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15


// Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array
//  containing the primes from the original array. A prime number is a number
// that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
function choosePrimes(nums) {
    let arrPrime = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        //console.log(num);
        if (isPrime(num)) {
            arrPrime.push(num);
        }
    }

    return arrPrime;
}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num %  i === 0) {
            return false;
        }
    }

    return true;
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([2, 4, 5, 11, 17, 20, 26])) // [2, 5, 11, 17]
