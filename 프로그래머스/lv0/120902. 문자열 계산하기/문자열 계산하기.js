function solution(my_string) {
    const stack = [];
    const arr = my_string.split(' ')
    let sign = 1;
    arr.forEach(item => {
        if (item === "+") {
            sign = 1;
        } else if (item === "-") {
            sign = -1;
        } else {
            stack.push(item * sign);
        }
    })
    return stack.reduce((a,b) => a + b, 0);
}