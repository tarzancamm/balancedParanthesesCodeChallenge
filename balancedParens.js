
// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

// Loop through string and count number of opening parantheses & closing paratheses, saved to their respective varaibles. Then check if varaibles are equal to each other. If true, return true.
let balanced = (str) => {
    let left = 0;
    let right = 0;
    const parenth1 = '('
    const parenth2 = ')'

    for (let i = 0; i < str.length; i++) {
        // Checks after each loop if right has more paranthesis. If so, it returns false immediately.
        if (right > left) {
            return false
        }
        if (str[i].includes(parenth1)){
            left++
        } else if (str[i].includes(parenth2)){
            right++
        }
    }
    // console.log(left)
    // console.log(right)
    if (left === right) {
        return true
    } else {
        return false
    }

}

// console.log(balanced('hello'))
console.log(balanced("(Bobs burgers((blue)))"))
