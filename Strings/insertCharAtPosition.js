const str = "geeksforgeeks"
const chars = "$"
const index = 7

console.log(newsString(str,chars,index))

// using built in method
function newString(str,chars,index){
    // str.slice(index) -> this means from position index till end
    return str.slice(0,index) + chars + str.slice(index)
}

// using custom method

function newsString(str,chars,index){
    let res =""
    for(let i=0;i<str.length;i++){
        if(i === index){
            res += chars           
        }
        res += str[i]
        if(index > str.length){
            res += str;
        }
        
    }
    return res;
}