/* 
Exercise 1
--------------------
Give an array of numbers, return sum of
each individual number in that array
---
Input: 
Array of numbers
---
Output:
Number
---
Example:
sum([1,2,3]) -> 6
*/
export function sum(arr: number[]): number {
  // your code here
}

/* 
Exercise 2
--------------------
If the given input is a number, you should return 
the factorial of that number. 
The factorial of a natural number n is the product 
of the positive integers less than or equal to n. 
So, 
2! = 1 * 2 =  2, 
3! = 1 * 2 * 3 = 6, 
and so on.
---
Input: 
Number
---
Output:
Number
---
Example:
factorial(4) -> 24
*/
export function factorial(num: number): number {
  // your code here
}

/* 
Exercise 3
--------------------
Count the occurrences of distinct elements in 
the given 2D array. The given input is an array, 
the elements of which are arrays of strings. 
The result is an object whose property names are 
the values from the arrays and their value is the 
number of their occurrences.
---
Input: 
Array of Arrays
---
Output:
{
  [element]: number
}
---
Example:
countElements(
  [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ]
) 
-> {
      a: 1,
      b: 1,
      c: 2,
      d: 2,
      f: 2,
      g: 1,
   } 
*/
export function countElements(arr: string[][]): Record<string, number> {
  // your code here
  // when you use reduce, write it like that arr.reduce<{ [k: string]: number }>()
}
