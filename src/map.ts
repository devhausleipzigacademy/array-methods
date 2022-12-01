/* 
Exercise 1
--------------------
Implement a function that doubles all the numbers in an array
---
Input: 
Array of numbers
---
Output:
Array of numbers
---
Example:
doubleNumbers([1,2,3]) -> [2,4,6]
*/
export function doubleNumbers(arr: number[]): number[] {
  // your code here
}

/* 
Exercise 2
--------------------
Implement a function that converts all the numbers in an array
into strings
---
Input: 
Array of numbers
---
Output:
Array of strings
---
Example:
stringItUp([1,2,3]) -> ["1", "2", "3"]
*/
export function stringItUp(arr: number[]): string[] {
  // your code here
}

/* 
Exercise 3
--------------------
Implement a function that capitalizes all names in an array
---
Input: 
Array of strings
---
Output:
Array of strings
---
Example:
capitalizeNames(["dan", "FRANZ", "taYloR"]) -> ["Dan", "Franz", "Taylor"]
*/
export function capitalizeNames(arr: string[]): string[] {
  // your code here
}

/* 
Exercise 4
--------------------
Implement a function that return an array of names 
from an array of Person
---
Input: 
Array of Person
Person -> {name: string, age: number}
---
Output:
Array of strings
---
Example:
namesOnly([
  { name: "Dan", age: 33 },
  { name: "Franz", age: 30 },
  { name: "Taylor", age: 32 },
]) -> ["Dan", "Franz", "Taylor"]
*/
interface Person {
  name: string;
  age: number;
}

export function namesOnly(arr: Person[]): string[] {
  // your code here
}

/* 
Exercise 5
--------------------
The given input is a string of multiple words with 
a single space between each of them. Abbreviate the name
 and return the name initials.
---
Input: 
String
---
Output:
String
---
Example:
getFullInitials("George Raymond Richard Martin") -> "GRRM"
*/
export function getFullInitials(name: string): string {
  // your code here
}

/* 
Exercise 6
--------------------
Based on Exercise 5 only convert the middle name(s)
to initials and append a dot to them
---
Input: 
String
---
Output:
String
---
Example:
getMiddleNameInitials("George Raymond Richard Martin") -> "Geoge R. R. Martin"
*/
export function getMiddleNameInitials(name: string): string {
  // your code here
}

/* 
Exercise 7
--------------------
Devs like to abbreviate everything: k8s means Kubernetes, 
a11y means accessibility, l10n means localization. 
You get the Dev numeronyms by taking the first and the last letter 
and counting the number of letters in between. 
Words that have less than 4 letters aren't abbreviated, 
because that would just be odd. The input is a sentence, 
and you should abbreviate every word that is 4 letters long 
or longer. There won't be any punctuation in the sentence. 
g2d l2k e6e
---
Input: 
String
---
Output:
String
---
Example:
createNumeronym("Every developer likes to mix kubernetes and javascript") 
-> "E3y d7r l3s to mix k8s and j8t";
*/
export function createNumeronym(sentence: string): string {
  // your code here
}
