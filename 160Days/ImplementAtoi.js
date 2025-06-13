// implement atoi i.e string to integer conversion. Without using any inbuilt functions.
// Input: s = "-123" && Output: -123

// Input: s = "   -" && Output: 0
// Explanation: No digits are present, therefore 0.

// Input: s = "  1231231231311133" && Output: 2147483647
// Explanation: The converted number is greater than 2^31 - 1, therefore print 2^31 - 1 = 2147483647.

// Input: s = "-999999999999" && Output: -2147483648
// Explanation: The converted number is smaller than -2^31, therefore print -2^31 = -2147483648.

// Input: s = "  -0012gfg4" && Output: -12
// Explanation: Nothing is read after -12 as a non-digit character 'g' was encountered.

const s = "  1231231k31311133"
console.log(implementingATOI(s))


// this is the brute force approach , where we are intially checking for whitespaces till there is white space we increment the index(i.e i)
// then we check the + and - sign if index item is - we update sign variable and vice versa.
// after this we convert each digits to number and also increment the index , we apply the sign and also we check if the result formed is 
// greater than 2^31 -1 or less than -(2^31) , if this is the case then update the result with 2^31 -1 or -(2^31).
function implementingATOI(s){
    let i =0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    // skip leading whitespace
    while(i< n && s[i] === ' '){
        i++;
    }

    // check for optional '+' or '-' sign
    if(i < n && (s[i] === '+' || s[i] === '-')){
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // convert digits and build the number
    while(i < n && s[i] >= '0' && s[i] <= '9'){
        let digit = s[i] - '0';
        result = result * 10 + digit;
        i++;
    }

    // apply sign
    result *= sign;

    // used for comparing result greater to 32 bit signed integer range
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if(result < INT_MIN) return INT_MIN;
    if(result > INT_MAX) return INT_MAX;
    return result;
}