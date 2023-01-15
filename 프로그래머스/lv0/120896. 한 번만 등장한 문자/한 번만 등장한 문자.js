function solution(s) {
    let result = [];
    let array = s.split("");
    
    array.forEach((v)=> {s.indexOf(v) === s.lastIndexOf(v) && result.push(v)})
    
    return result.sort().join("");
} 