// Method1: Iterate from the last index
const str = "geeksforgeeks"
console.log(StackReverse(str))


function basicReverse(str){
    let res =[];
    for(let i = str.length-1;i>=0;i--){
        res.push(str[i])
    }
    return res.join('')
}

// Using two pointer approach
function twoPointerReverse(str){
    let left =0 , right = str.length-1;
    let newStr = str.split('')
    while(left< right){
        [newStr[left],newStr[right]] = [newStr[right],newStr[left]]
        left++;
        right--;
    }
    return newStr.join('')
}

// Using stack approach
function StackReverse(str){
    let stack = []
    let strArr = str.split('')
    let newArr = new Array(str.length)
    for(let i=0;i<strArr.length;i++){
        stack.push(strArr[i])
    }
    for(let i=0;i<str.length;i++){
        newArr[i] = stack.pop();
    }
    return newArr.join('')
}

// Using built in method of .reverse() but before doing this split string as reverse works in an array and after that join('') i.e convert it to string
// again