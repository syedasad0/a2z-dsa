//write a javascript code for paranthesis checker?

function isValidParentheses(str) {
    let stack = [];
    const balanced = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] == '[') {
            stack.push(str[i]);
        }
        else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            if (stack.length == 0 || stack.pop() !== balanced[str[i]]) {
                return false
            }
        }
    }
    return stack.length === 0;
}


const testString1 = "({[]})";
const testString2 = "({[})";

console.log(isValidParentheses(testString1)); // Output: true
console.log(isValidParentheses(testString2)); // Output: false