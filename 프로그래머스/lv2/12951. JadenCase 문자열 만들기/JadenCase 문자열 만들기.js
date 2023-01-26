function solution(s) {
    const strArr = s.split(" ")
    return strArr.map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ")
}