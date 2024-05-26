function getValidMoves(
  type: string,
  i: number,
  j: number,
  board: string[][],
  isWhiteTurn: boolean
): [number, number][] {
  let moves: [number, number][] = [];

  switch (type) {
    case "bp":
      if (i === 1 && !board[i + 1][j] && !board[i + 2][j]) {
        moves.push([i + 2, j]);
      }
      if (i < 7 && !board[i + 1][j]) {
        moves.push([i + 1, j]);
      }
      if (
        i < 7 &&
        j > 0 &&
        board[i + 1][j - 1] &&
        board[i + 1][j - 1].charAt(0) === "w"
      ) {
        moves.push([i + 1, j - 1]);
      }
      if (
        i < 7 &&
        j < 7 &&
        board[i + 1][j + 1] &&
        board[i + 1][j + 1].charAt(0) === "w"
      ) {
        moves.push([i + 1, j + 1]);
      }
      return moves;
    case "wp":
      if (i === 6 && !board[i - 1][j] && !board[i - 2][j]) {
        moves.push([i - 2, j]);
      }
      if (i > 0 && !board[i - 1][j]) {
        moves.push([i - 1, j]);
      }
      if (
        i > 0 &&
        j > 0 &&
        board[i - 1][j - 1] &&
        board[i - 1][j - 1].charAt(0) === "b"
      ) {
        moves.push([i - 1, j - 1]);
      }
      if (
        i > 0 &&
        j < 7 &&
        board[i - 1][j + 1] &&
        board[i - 1][j + 1].charAt(0) === "b"
      ) {
        moves.push([i - 1, j + 1]);
      }
      return moves;
    case "br":
    case "wr":
      for (let k = i + 1; k < 8; k++) {
        if (k === i) {
          continue;
        }
        if (board[k][j]) {
          if (isWhiteTurn && board[k][j].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[k][j].charAt(0) === "b") {
            break;
          } else {
            moves.push([k, j]);
            break;
          }
        }
        moves.push([k, j]);
      }
      for (let k = i - 1; k >= 0; k--) {
        if (k === i) {
          continue;
        }
        if (board[k][j]) {
          if (isWhiteTurn && board[k][j].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[k][j].charAt(0) === "b") {
            break;
          } else {
            moves.push([k, j]);
            break;
          }
        }
        moves.push([k, j]);
      }
      for (let k = j + 1; k < 7; k++) {
        if (k === j) {
          continue;
        }
        if (board[i][k]) {
          if (isWhiteTurn && board[i][k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i][k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i, k]);
            break;
          }
        }
        moves.push([i, k]);
      }
      for (let k = j - 1; k >= 0; k--) {
        if (k === j) {
          continue;
        }
        if (board[i][k]) {
          if (isWhiteTurn && board[i][k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i][k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i, k]);
            break;
          }
        }
        moves.push([i, k]);
      }
      return moves;
    case "bb":
    case "wb":
      for (let k = 1; i + k < 8 && j + k < 8; k++) {
        if (board[i + k][j + k]) {
          if (isWhiteTurn && board[i + k][j + k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i + k][j + k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i + k, j + k]);
            break;
          }
        }
        moves.push([i + k, j + k]);
      }
      for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
        if (board[i - k][j - k]) {
          if (isWhiteTurn && board[i - k][j - k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i - k][j - k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i - k, j - k]);
            break;
          }
        }
        moves.push([i - k, j - k]);
      }
      for (let k = 1; i + k < 8 && j - k >= 0; k++) {
        if (board[i + k][j - k]) {
          if (isWhiteTurn && board[i + k][j - k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i + k][j - k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i + k, j - k]);
            break;
          }
        }
        moves.push([i + k, j - k]);
      }
      for (let k = 1; i - k >= 0 && j + k < 8; k++) {
        if (board[i - k][j + k]) {
          if (isWhiteTurn && board[i - k][j + k].charAt(0) === "w") {
            break;
          } else if (!isWhiteTurn && board[i - k][j + k].charAt(0) === "b") {
            break;
          } else {
            moves.push([i - k, j + k]);
            break;
          }
        }
        moves.push([i - k, j + k]);
      }
      return moves;
    case "bn":
    case "wn":
      if (i + 2 < 8 && j + 1 < 8) {
        if (
          !board[i + 2][j + 1] ||
          (isWhiteTurn && board[i + 2][j + 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 2][j + 1].charAt(0) === "w")
        ) {
          moves.push([i + 2, j + 1]);
        }
      }
      if (i + 2 < 8 && j - 1 >= 0) {
        if (
          !board[i + 2][j - 1] ||
          (isWhiteTurn && board[i + 2][j - 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 2][j - 1].charAt(0) === "w")
        ) {
          moves.push([i + 2, j - 1]);
        }
      }
      if (i - 2 >= 0 && j + 1 < 8) {
        if (
          !board[i - 2][j + 1] ||
          (isWhiteTurn && board[i - 2][j + 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 2][j + 1].charAt(0) === "w")
        ) {
          moves.push([i - 2, j + 1]);
        }
      }
      if (i - 2 >= 0 && j - 1 >= 0) {
        if (
          !board[i - 2][j - 1] ||
          (isWhiteTurn && board[i - 2][j - 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 2][j - 1].charAt(0) === "w")
        ) {
          moves.push([i - 2, j - 1]);
        }
      }
      if (i + 1 < 8 && j + 2 < 8) {
        if (
          !board[i + 1][j + 2] ||
          (isWhiteTurn && board[i + 1][j + 2].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 1][j + 2].charAt(0) === "w")
        ) {
          moves.push([i + 1, j + 2]);
        }
      }
      if (i + 1 < 8 && j - 2 >= 0) {
        if (
          !board[i + 1][j - 2] ||
          (isWhiteTurn && board[i + 1][j - 2].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 1][j - 2].charAt(0) === "w")
        ) {
          moves.push([i + 1, j - 2]);
        }
      }
      if (i - 1 >= 0 && j + 2 < 8) {
        if (
          !board[i - 1][j + 2] ||
          (isWhiteTurn && board[i - 1][j + 2].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 1][j + 2].charAt(0) === "w")
        ) {
          moves.push([i - 1, j + 2]);
        }
      }
      if (i - 1 >= 0 && j - 2 >= 0) {
        if (
          !board[i - 1][j - 2] ||
          (isWhiteTurn && board[i - 1][j - 2].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 1][j - 2].charAt(0) === "w")
        ) {
          moves.push([i - 1, j - 2]);
        }
      }
      return moves;
    case "bk":
    case "wk":
      if (i + 1 < 8 && j + 1 < 8) {
        if (
          !board[i + 1][j + 1] ||
          (isWhiteTurn && board[i + 1][j + 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 1][j + 1].charAt(0) === "w")
        ) {
          moves.push([i + 1, j + 1]);
        }
      }
      if (i + 1 < 8 && j - 1 >= 0) {
        if (
          !board[i + 1][j - 1] ||
          (isWhiteTurn && board[i + 1][j - 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 1][j - 1].charAt(0) === "w")
        ) {
          moves.push([i + 1, j - 1]);
        }
      }
      if (i - 1 >= 0 && j + 1 < 8) {
        if (
          !board[i - 1][j + 1] ||
          (isWhiteTurn && board[i - 1][j + 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 1][j + 1].charAt(0) === "w")
        ) {
          moves.push([i - 1, j + 1]);
        }
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (
          !board[i - 1][j - 1] ||
          (isWhiteTurn && board[i - 1][j - 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 1][j - 1].charAt(0) === "w")
        ) {
          moves.push([i - 1, j - 1]);
        }
      }
      if (i + 1 < 8) {
        if (
          !board[i + 1][j] ||
          (isWhiteTurn && board[i + 1][j].charAt(0) === "b") ||
          (!isWhiteTurn && board[i + 1][j].charAt(0) === "w")
        ) {
          moves.push([i + 1, j]);
        }
      }
      if (i - 1 >= 0) {
        if (
          !board[i - 1][j] ||
          (isWhiteTurn && board[i - 1][j].charAt(0) === "b") ||
          (!isWhiteTurn && board[i - 1][j].charAt(0) === "w")
        ) {
          moves.push([i - 1, j]);
        }
      }
      if (j + 1 < 8) {
        if (
          !board[i][j + 1] ||
          (isWhiteTurn && board[i][j + 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i][j + 1].charAt(0) === "w")
        ) {
          moves.push([i, j + 1]);
        }
      }
      if (j - 1 >= 0) {
        if (
          !board[i][j - 1] ||
          (isWhiteTurn && board[i][j - 1].charAt(0) === "b") ||
          (!isWhiteTurn && board[i][j - 1].charAt(0) === "w")
        ) {
          moves.push([i, j - 1]);
        }
      }
      return moves;
    default:
      return [];
  }
}

function getMaterialScore(board: string[][]): number {
  let score = 0;
  board.forEach((row) => {
    row.forEach((piece) => {
      if (piece === "bp") {
        score -= 1;
      } else if (piece === "wp") {
        score += 1;
      } else if (piece === "bb") {
        score -= 3;
      } else if (piece === "wb") {
        score += 3;
      } else if (piece === "bn") {
        score -= 3;
      } else if (piece === "wn") {
        score += 3;
      } else if (piece === "br") {
        score -= 5;
      } else if (piece === "wr") {
        score += 5;
      } else if (piece === "bk") {
        score -= 100;
      } else if (piece === "wk") {
        score += 100;
      }
    });
  });
  return score;
}

function getVisionScore(board: string[][]): number {
  let score = 0;
  board.forEach((row, i) => {
    row.forEach((piece, j) => {
      if (piece) {
        const moves = getValidMoves(
          piece,
          i,
          j,
          board,
          piece.charAt(0) === "w"
        );
        if (piece.charAt(0) === "w") {
          score += 0.2 * moves.length;
        } else {
          score -= 0.2 * moves.length;
        }
      }
    });
  });
  return score;
}

function evaluateBoard(board: string[][]): number {
  return getMaterialScore(board) + getVisionScore(board);
}

function minimax(
  board: string[][],
  depth: number,
  isMaximizing: boolean
): number {
  if (depth === 0) {
    return evaluateBoard(board);
  }

  const moves: string[][][] = [];
  board.forEach((row, i) => {
    row.forEach((piece, j) => {
      if (piece && piece.charAt(0) === "w") {
        const newMoves = getValidMoves(piece, i, j, board, true);
        newMoves.forEach(([i1, j1]) => {
          const newBoard = board.map((row) => [...row]);
          newBoard[i1][j1] = newBoard[i][j];
          newBoard[i][j] = "";
          moves.push(newBoard);
        });
      }
    });
  });

  if (isMaximizing) {
    let bestMove = -Infinity;
    moves.forEach((move) => {
      bestMove = Math.max(bestMove, minimax(move, depth - 1, false));
    });
    return bestMove;
  } else {
    let bestMove = Infinity;
    moves.forEach((move) => {
      bestMove = Math.min(bestMove, minimax(move, depth - 1, true));
    });
    return bestMove;
  }
}

function getBestMove(board: string[][]): [number, number, number, number] {
  let bestMove: [number, number, number, number] = [-1, -1, -1, -1];
  let bestValue = -Infinity;
  board.forEach((row, i) => {
    row.forEach((piece, j) => {
      if (piece && piece.charAt(0) === "w") {
        const newMoves = getValidMoves(piece, i, j, board, true);
        newMoves.forEach(([i1, j1]) => {
          const newBoard = board.map((row) => [...row]);
          newBoard[i1][j1] = newBoard[i][j];
          newBoard[i][j] = "";
          const value = minimax(newBoard, 2, false);
          if (value > bestValue) {
            bestMove = [i, j, i1, j1];
            bestValue = value;
          }
        });
      }
    });
  });
  return bestMove;
}

export {
  getValidMoves,
  getMaterialScore,
  getVisionScore,
  evaluateBoard,
  minimax,
  getBestMove,
};
