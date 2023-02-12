function solution(n) {
    const numOne = n.toString(2).split('1').length
     while (n++) {
        if (n.toString(2).split('1').length === numOne) return n
    }
}