function connectFour (board) {
    let inProgress = false, draw = false;
    for(let i = 0; i < board.length; i++) { // this will be for horizontal solution
        for(let j = 0; j < board[i].length - 3; j++) {
            if(board[i][j] === '-') inProgress = true;
            else if (board[i][j] === 'R' && board[i][j+1] === 'R' && board[i][j+2] === 'R' && board[i][j+3] === 'R') return 'R';
            else if (board[i][j] === 'Y' && board[i][j+1] === 'Y' && board[i][j+2] === 'Y' && board[i][j+3] === 'Y') return 'Y';
        }
    }
    for(let i = 0; i < board.length; i++) { // this will be for vertical wins
        for(let j = 0; j < board[i].length-4; j++) {
            if(board[j][i] === 'R' && board[j+1][i] === 'R' && board[j+2][i] === 'R' && board[j+3][i] === 'R') return 'R';
            else if (board[j][i] === 'Y' && board[j+1][i] === 'Y' && board[j+2][i] === 'Y' && board[j+3][i] === 'Y') return 'Y';
        }
    }
    for(let i = 0; i < board.length-3; i++) { // this is for diagonal coming from left
        for(let j = 0; j < board[i].length - 3; j++) {
            if(board[i][j] === 'R' && board[i+1][j+1] === 'R' && board[i+2][j+2] === 'R' && board[i+3][j+3] === 'R') return 'R';
            else if(board[i][j] === 'Y' && board[i+1][j+1] === 'Y' && board[i+2][j+2] === 'Y' && board[i+3][j+3] === 'Y') return 'Y';
        }
    }
    for(let i = 0; i < board.length-3; i++) {
    	for(let j = board.length; j >= 3; j--) {
    		if(board[i][j] === 'R' && board[i+1][j-1] === 'R' && board[i+2][j-2] === 'R' && board[i+3][j-3] === 'R') return 'R';
            else if (board[i][j] === 'Y' && board[i+1][j-1] === 'Y' && board[i+2][j-2] === 'Y' && board[i+3][j-3] === 'Y') return 'Y'; 
    	}
    }
    if(inProgress) return 'in progress';
    else return 'draw';
}