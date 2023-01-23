function solution(s) {
    const arr = s.split(" ").sort((a,b) => a-b)
    const minStr = arr[0]
    const maxStr = arr[arr.length-1]
    return [minStr,maxStr].join(" ") 
}