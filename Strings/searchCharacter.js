const str = "geeksforgeeks"
const ch = 'f'
console.log(searchingChar(str,ch))

function searchingChar(str,ch){
    const index = str.indexOf(ch)
    return index;
}