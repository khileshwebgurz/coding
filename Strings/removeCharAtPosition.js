const str = "geeks"
const index = 3

console.log(customMethodString(str,index))

// using built in methods
function removingChars(str,index){
    return str.slice(0,index) + str.slice(index+1)
}

// using custom methods
function customMethodString(str,index){
    if(index <0 || index>str.length) return null;
    let strArr = str.split('') //convert string to array 

    for(let i =index;i<strArr.length;i++){
        strArr[i] = strArr[i+1]
        
    }
    strArr.pop(); //removed the last item which will be empty space as we removed one character.and shifted other characters to left side.
   
    return strArr.join(''); //convert back to string
}
