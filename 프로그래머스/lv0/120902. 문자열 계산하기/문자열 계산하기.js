function solution(my_string) {
    const str = my_string.split(" ");
    let result = Number(str[0]);
     str.forEach((s, index) => {
        if(s === "+"){
            result += Number(str[index + 1]);
        }
        
        if(s === "-"){
            result -= Number(str[index + 1]);
        }
    })
    
    return result;
}