// have to insert characters at multiple positions
const str = "geeksforgeeks"
const chars = [1,3,5,17]
console.log(customMultiplePos(str,chars))


// using built in methods -> slice
function multiplePos(str, chars) {
    for (let i = chars.length - 1; i >= 0; i--) {
        str = str.slice(0, chars[i]) + "*" + str.slice(chars[i]);
    }
    return str;
}

// using custom methods
function customMultiplePos(str,chars){
    let j =0;
    let ans =""
    for(let i =0;i<str.length;i++){
        if(j < chars.length && i === chars[j]){
            ans += '*';
            j++;
        }
        ans += str[i];
    }
    return ans;
}
