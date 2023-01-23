function solution(arr, divisor) {
    let result = [];
    arr.map(v => v%divisor === 0 && result.push(v) )
    return result.length === 0 ? [-1] : result.sort((a,b) => a-b)
}