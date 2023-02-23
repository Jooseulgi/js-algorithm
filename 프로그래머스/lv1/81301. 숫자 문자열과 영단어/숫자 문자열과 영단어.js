function solution(s) {
    const arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    let result = s
    for(let i = 0; i<arr.length; i++){
        let splitNum = result.split(arr[i])
        result = splitNum.join(i)
    }
    return Number(result)
}