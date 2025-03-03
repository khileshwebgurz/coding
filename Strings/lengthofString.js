const str = 'helloworld'
console.log(lengthIs(str))

function lengthIs(str){
    let count =0 , i =0;
    while(str[i] !== undefined){
        i++;
        count++;
    }
    return count;
}