function solution(my_string) {
    let arr = []
    for(let s of my_string){ 
        !arr.includes(s) ? arr.push(s) : []
    }
    return arr.join("")
}