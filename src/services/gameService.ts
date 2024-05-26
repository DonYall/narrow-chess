import {
  getValidMoves,
  getMaterialScore,
  evaluateBoard,
  minimax,
  getBestMove,
} from "../utils/gameUtils";

class GameService {
  private board: string[][];
  private isWhiteTurn: boolean = true;

  constructor() {
    this.board = [
      ["br", "bb", "bb", "bk", "bn", "bn", "br"],
      ["bp", "bp", "bp", "bp", "bp", "bp", "bp"],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["wp", "wp", "wp", "wp", "wp", "wp", "wp"],
      ["wr", "wb", "wb", "wk", "wn", "wn", "wr"],
    ];
  }

  public getBoard(): string[][] {
    return this.board;
  }

  public movePiece(from: [number, number], to: [number, number]): void {
    this.board[to[0]][to[1]] = this.board[from[0]][from[1]];
    this.board[from[0]][from[1]] = "";
    this.isWhiteTurn = !this.isWhiteTurn;
  }

  public getValidMoves(i: number, j: number): [number, number][] {
    const type = this.board[i][j];
    if (type.charAt(0) === "w" && !this.isWhiteTurn) return [];
    if (type.charAt(0) === "b" && this.isWhiteTurn) return [];

    return getValidMoves(type, i, j, this.board, this.isWhiteTurn);
  }

  public getMaterialScore(): number {
    return getMaterialScore(this.board);
  }

  public evaluateBoard(): number {
    return evaluateBoard(this.board);
  }

  public minimax(depth: number): number {
    return minimax(this.board, depth, this.isWhiteTurn);
  }
}

export default GameService;
