function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const boardNum = [Math.floor(board[0]/2),Math.floor(board[1]/2)]
    keyinput.forEach(item => {
        if(item === 'left') x--
        else if (item === 'right') x++
        else if (item === 'up') y++
        else if (item === 'down') y--
        if(Math.abs(x) > boardNum[0]){
            x = x < 0 ? -boardNum[0] : boardNum[0]
        } 
        if(Math.abs(y) > boardNum[1]){
             y = y < 0 ? -boardNum[1] : boardNum[1]
        } 
    })
    
    return [x,y];
}