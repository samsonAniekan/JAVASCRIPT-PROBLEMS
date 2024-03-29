# 💫 About Me:
i am currently working on some hard JavaScript problems , the ones you will likely get in coding interviews


## 🌐 Socials:
[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/iamAniekan) 

# 💻 Tech Stack:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=samsonAniekan&theme=dark&hide_border=false&include_all_commits=false&count_private=false)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=samsonAniekan&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=samsonAniekan&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)

---
[![](https://visitcount.itsvg.in/api?id=samsonAniekan&icon=0&color=0)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
# JAVASCRIPT-PROBLEMS
## The Problems below contains a list of Problems that i have Currated During my Practice of arrays, strings, and their methods I solve them using some step by step Approach
### list of some very complex Interview questions in JavaScript with Topics like Arrays, strings, Numbers, array methods , string Methods..
# NOTE:  To Run this Problems RUN node "filename.js" on your Terminal 
1. Write a function echo that takes in a string and console.logs that string "echo-ized".

* _console.log(echo("haha")) // => prints "HAHA ... HAHa ... haha"
* console.log(echo("JUmp"))// => prints "JUMP ... JUMp ... jump"_

2. Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".

+ _console.log(countVowels("bootcamp")); // => 3
* console.log(countVowels("apple")); // => 2
* console.log(countVowels("pizza")); // => 2_

3. Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

* _console.log(sumArray([1, 2, 3, 4])) // => 10
* console.log(sumArray( [5, 6, 4])); // => 15
* console.log(sumArray( [7, 3, 9, 11])); // => 30_

4. Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".
Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
Hint: Remember the String.includes method!

* _console.log(pigLatinWord("apple")); //=> "appleyay"
* console.log(pigLatinWord("eat")); //=> "eatyay"
* console.log(pigLatinWord("banana")); //=> "ananabay"_

5. Write a function myIndexOf(arr, target) that takes in an array and target value as args. The function should return the first index where the target is found in the array. If the target is not found, it should return -1. Solve this without using Array.indexOf.
* _console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
* console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
* console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
* console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
* console.log(myIndexOf([43, -7, 11, 13], 1)); // -1_

6. Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.
* _console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
* console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
* console.log(twoSum([4, 6, 2, 3], 8)); // true
* console.log(twoSum([4, 6, 2, 3], 11)); // false_

7.Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
* _console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
* console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]_

8. Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
* _console.log(removeLastVowel('bootcamp')); // 'bootcmp'
* console.log(removeLastVowel('better')); // 'bettr'
* console.log(removeLastVowel('graph')); // 'grph'
* console.log(removeLastVowel('thy')); // 'thy'_

9. Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.
* _console.log(leastCommonMultiple(4, 6)); // 12
* console.log(leastCommonMultiple(3, 5)); // 15
* console.log(leastCommonMultiple(2, 10)); // 10_

10. Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
* console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
* console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

11. Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples.
Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4
You may assume that the number of times will always be an integer between 0 and 9.
* _console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
* console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
* console.log(uncompress('b1o2t1')); // 'boot'_

12. Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

