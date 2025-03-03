// remove all the occurence of the characters from the string
const str = "geeksforgeeks"
const char = "e"

console.log(removingallChar(str,char))

function removingallChar(str,char){
    // str.split('e') => ['g','k','s','f','o','r','g','k','s']
    // then .join('') => gksforgks
    return str.split(char).join('')
}