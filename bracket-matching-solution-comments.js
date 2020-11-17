class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input) {
  const bracketsSeen = new Stack();
  //create object of the values you're checking for
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  //create an array of the closing symbols
  const closeBrackets = ["}", "]", ")"];
  //loop through the input
  for (let i = 0; i < input.length; i++) {
    //create a variable for each value in the input that we iterate over
    const character = input[i];
    //is the current input value an existing key in the object we created? If so push into the stack
    if (brackets[character] !== undefined) {
      bracketsSeen.push(character);
    } //if the current input value is not an existing key in the object (an opening symbol), is it a closing symbol?
    else if (closeBrackets.includes(character)) {
      //if it's a closing symbol, but the stack is empty or the most recent item in the stack (an opening symbol) does not correspond, then return false
      if (bracketsSeen.isEmpty() || (brackets[bracketsSeen.peek()] !== character)) {
        return false;
      } //otherwise, we found a match! Remove the last item from the stack and continue iterating over the array
      else {
        bracketsSeen.pop();
      }
    }
  }
  //if we iterate through the whole loop and haven't returned false, check if the stack is empty and return that boolean (if it's empty, all the symbols we were checking for were properly matched and nested)
  return bracketsSeen.isEmpty()
}

console.log(bracketMatching('{{()}}'))
console.log(bracketMatching('{{)}}'))