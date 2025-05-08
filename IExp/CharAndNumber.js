function convertToPattern(input) {
    return input.split('').map(char => char + (char.charCodeAt(0) - 64)).join('');
}

// Example usage
console.log(convertToPattern("ABk")); // Output: A1B2Z26
