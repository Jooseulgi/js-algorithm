function solution(A,B){
    const sortA = A.sort((a,b) => a-b)
    const sortB = B.sort((a,b) => b-a)
    const addNum = sortA.map((a,idx) => sortB[idx] * a)
    return addNum.reduce((total,acc) => total+acc,0)
}