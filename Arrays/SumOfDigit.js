// Given an integer n, we need to repeatedly find the sum of its digits until the result becomes a single-digit number.
// example: 1234 output will be 1+2+3+4 = 10 and again 1+0 = 1 hence output will be 1
const num = 1234
console.log(mathsum(num))

// basic approach with O(1) space complexity and O(log10n) time complexity.
function digitsum(num){
    let sum =0;
    while(num > 0 || sum > 9){
        if (num === 0) {
            num = sum;
            sum = 0;
        }

        sum += num%10;
        num = Math.floor(num/10)
    }
    return sum;
}

// better approach would be using Mathematical way
// We know that every number in the decimal system can be expressed as a sum of its digits multiplied by powers of 10. For example, a number represented as
//  abcd can be written as follows: abcd = a*10^3 + b*10^2 + c*10^1 + d*10^0   

// We can separate the digits and rewrite this as:
// abcd = a + b + c + d + (a*999 + b*99 + c*9)
// abcd = a + b + c + d + 9*(a*111 + b*11 + c)

// This implies that any number can be expressed as the sum of its digits plus a multiple of 9.
// So, if we take modulo with 9 on each side, 
// abcd % 9 = (a + b + c + d) % 9 + 0


// This means that the remainder when abcd is divided by 9 is equal to the remainder where the sum of its digits (a + b + c + d) is divided by 9.

// Here tc will be O(1) and Sc will be O(1)
function mathsum(num){
    if(num % 9 ===0) return 9;
    return num%9;

}