function isValid(s) {
    // Stack variable to store the starting parenthesis
    const stack = []

    // Map object to store the closing parenthesis
    const closingMap = new Map()
    closingMap.set(")", "(")
    closingMap.set("}", "{")
    closingMap.set("]", "[")

    // Loop through each character to see if it is closing parenthesis and have pair with opening
    for (let char of s) {
        if (closingMap.has(char)) { // if is a closing parenthesis
            // pop the last  char from stack to compare
            const left = stack.pop();
            const right = closingMap.get(char);
            if (left !== right) {
                return false;
            }
        } else { // else add the char to the stack
            stack.push(char);
        }
    }
    return stack.length === 0;
}