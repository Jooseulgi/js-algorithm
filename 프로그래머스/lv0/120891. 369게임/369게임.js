function solution(order) {
    const num = ['3','6','9']
    return [...String(order)].filter(v => num.includes(v)).length
}