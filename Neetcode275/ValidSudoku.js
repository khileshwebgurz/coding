// Given a Sudoku board configuration, the task is to check whether the given Sudoku board configuration is valid or not. A valid configuration
// requires that each row, column, and 3×3 sub-matrix must contain the digits 1-9 without repetition


// We just have to validate the sudoku not to solve it. we just need to verify that whether each row , col and 3x3 matrix have only single number means
// they are not repeated here.
const mat = [
    [5, 3, 4, 6, 7,8, 9, 1, 2],
    [6, 7, 2, 1, 9,5, 3, 4, 8],
    [1, 9, 8, 3, 4,2, 5, 6, 7],
    [8, 5, 9, 7, 6,1, 4, 2, 3],
    [4, 2, 6, 8, 5,3, 7, 9, 1],
    [7, 1, 3, 9, 2,4, 8, 5, 6],
    [9, 6, 1, 5, 3,7, 2, 8, 4],
    [2, 8, 7, 4, 1,9, 6, 3, 5],
    [3, 4, 5, 2, 8,6, 1, 7, 9]
  ];

console.log(validSudoku(mat));

// this is the brute force approach with Tc as O(n3) and space complexity as O(n)
// doing 0%3 gives us 0 means if numerator is smaller than denominator and finding remiander then it will be numerator only.
function validSudoku(mat) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        !validRow(mat, i) ||
        !validColumn(mat, j) ||
        !validMatrix(mat, i - (i % 3), j - (j % 3))
      ) {
        return false;
      }
    }
  }
  return true;
}

function validRow(mat, row) {
  // creating array of size 9 filled with 0.
  let visitedNum = new Array(10).fill(0);
  for (let i = 0; i < 9; i++) {
    // if array is not empty, then we have to store value inside val and then check if my visited array is 0 or 1 if it is one then it means
    // we already visited here then return false else just increment the visitedNum[val] by 1.
    // here we are skipping 0 bcz 0 means empty and it will not effect our sudoku is valid or invalid.
    if (mat[row][i] !== 0) {
      let val = mat[row][i];
      if (visitedNum[val] !== 0) {
        return false;
      }
      visitedNum[val]++;
    }
  }
  return true;
}

// just liek for row do it for column too.
function validColumn(mat, col) {
  let visitedNum = new Array(10).fill(0);
  for (let i = 0; i < 9; i++) {
    if (mat[i][col] !== 0) {
      let val = mat[i][col];
      if (visitedNum[val] !== 0) {
        return false;
      }
      visitedNum[val]++;
    }
  }
  return true;
}

function validMatrix(mat, startRow, startCol) {
  let visitedNum = new Array(10).fill(0);
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      // current element in submatrix
      let curr = mat[row + startRow][col + startCol];
      //   if cell is not empty
      if (curr !== 0) {
        // if duplicate is found
        if (visitedNum[curr] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
}




// Now the optimised approach is using Hashing