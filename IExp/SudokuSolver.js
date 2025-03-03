//  We need to create a function for solving sudoku.
let sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function printBoard(board) {
    board.forEach(row => console.log(row.join(" ")));
}

printBoard(solveSudoku(sudokuBoard));

// this is the brute force approach with O(9*n) time complexity 
function solveSudoku(sudokuBoard){
    for(let row =0;row<9;row++){
        for(let col =0;col<9;col++){
            if(sudokuBoard[row][col] === 0){
                for(let num=1;num<=9;num++){
                    if(isValid(sudokuBoard,row,col,num)){
                        sudokuBoard[row][col] = num;

                        // we are returning sudokuboard bcz final answer will be solved board
                        if(solveSudoku(sudokuBoard)) return sudokuBoard; //recursively call this function

                        sudokuBoard[row][col] =0; //this will make that index 0 as we are backtracking.
                    }
                }
                return false;
            }
        }
    }
    return sudokuBoard;
}

function isValid(sudokuBoard,row,col,num){
    for(let i =0;i<9;i++){
        if(sudokuBoard[row][i] === num) return false;
    }

    for(let i =0;i<9;i++){
        if(sudokuBoard[i][col] === num) return false;
    }

    // Check 3×3 subgrid
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudokuBoard[startRow + i][startCol + j] === num) return false;
        }
    }
    return true;
}