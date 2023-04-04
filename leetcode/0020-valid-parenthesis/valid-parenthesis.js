/*
input: string 
output: boolean 

RULES 
Explicit 
- create a function that allows you to validate wether a parentheses string is valid
  - return true if valid, false otherwise. 

Implicit 
- "stack" data structure 
- Assumptions: 
  - we'll be give at least a string consisting of parenthesis

EXPLORATION 
{
  "(": ")", 
  "{": "}"
  "[": "]"
}

"]" === "}", are they the same? Nope

( ) [ }
      ^
      break out of the loop
"]"
------
stack


TESTS 
T1 
input: "(({{}}))"
output: true 

T2 
input: "()[}"
output: false 

MENTAL MODEL 
Given the string `"(({{}}))"` we want to validate wether it contains 
valid parenthesis or not. If it's valid we'll return true, or false otherwise. 

Everytime we find a "opening" bracket, we'll "push" it's corresponding "closing" bracket 
onto the stack. Then, whenever we find a "closing" bracket in the function argument `parentheses`
we'll "pop" that item off of the stack and we'll compare it against the current item in the `parentheses` string. 
If they match, we'll continue moving, if the don't we must exit out of the loop. 
If the stack is empty by the time we iterate over the entire `parenthesis` argument. 
Then, we'll return true, otherwise we return false. 

DATA STRUCTURES
- Object Literal: to compare parenthesis 
- Array based stack data Structure: to temporarily store bracket items 

ALGORITHM 
- if the `parens` parameter has a string with less than 2 characters
  - return false 

- set `stack` to an empty array 
- set `parensMap` to a map with the following properties: 
  - "(" : ")"
  - "[" : "]"
  - "{" : "}"

- for each char in the `parens` string 
  - set `currentParenthesis` to the item in the current iteration 
  - if `currentParentheis` is an opening parenthesis 
    - push it's matching closing parenthsis to the stack 

  - if `currentParentheis` is an closing parenthesis 
    - set `poppedItem` to (OPERATION: pop the item at the top of the stack)
    - if `poppedItem` is NOT equal to `currentParenthesis`
      - break out of the loop 

  - if the length of `stack` is 0 
    - return true 
  - otherwise
    - return false 
*/

import { Stack } from "./stack.js"

function isValidParenthesis(parensInput) {
  if (parensInput.length < 2) {
    return false; 
  } 

  const stack = new Stack(); 
  const parensMap = {
    "(" : ")",
    "[" : "]",
    "{" : "}",
  }

  for (const currentParenthsis of parensInput) {
    const isOpeningParens = currentParenthsis in parensMap;
    const isClosedParens = Object.values(parensMap).includes(currentParenthsis);

    if (isOpeningParens) {
      stack.push(parensMap[currentParenthsis])
    }

    if (isClosedParens) {
      const peekedItem = stack.peek(); 
      if (peekedItem !== currentParenthsis) {
        break; 
      }
      stack.pop();
    }
  }

  return stack.isEmpty()
}

console.log(isValidParenthesis("(({{}}))")); // true 
console.log(isValidParenthesis("()()()()")); // true 
console.log(isValidParenthesis("[()([)]]")); // false
console.log(isValidParenthesis("()[}")); // false  