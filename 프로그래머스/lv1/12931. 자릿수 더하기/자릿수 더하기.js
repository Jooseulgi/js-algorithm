function solution(N){
    return [...String(N)].map(v=> Number(v)).reduce((total,acc) => total + acc, 0)
}