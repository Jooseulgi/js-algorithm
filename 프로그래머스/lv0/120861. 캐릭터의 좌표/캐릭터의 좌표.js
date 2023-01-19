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
            x < 0 ? x = -boardNum[0] : x = boardNum[0]
            return
        } 
        if(Math.abs(y) > boardNum[1]){
             y < 0 ? y = -boardNum[1] : y = boardNum[1]
            return    
        } 
    })
    
    return [x,y];
}