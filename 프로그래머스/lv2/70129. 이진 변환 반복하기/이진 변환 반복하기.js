function solution(s) {
    let count = 0
    let zeroNum = 0
    while( s.length > 1) {
        count += 1
        sLen = s.length
        s = s.split("0").join("")
        zeroNum += (sLen - s.length)
        s = s.length.toString(2)
    }
    return [count,zeroNum]
}