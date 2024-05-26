import { useEffect, useState } from "react";
import classnames from "classnames";
import "../styles/Chessboard.css";
import Piece from "./Piece";
import GameService from "../services/gameService";

const gameService = new GameService();

function Chessboard() {
  const [board, setBoard] = useState(gameService.getBoard());
  const [validMoves, setValidMoves] = useState<string[]>([]);

  useEffect(() => {
    setBoard(gameService.getBoard());
  }, []);

  const resetValidMoves = () => {
    setValidMoves([]);
  };

  const handleSelect = (_e: React.DragEvent, i: number, j: number) => {
    const moves = gameService.getValidMoves(i, j);
    const movesAsStrings = moves.map(([i, j]) => `${i}-${j}`);
    setValidMoves(movesAsStrings);
  };

  const handleMove = (e: React.DragEvent, i: number, j: number) => {
    e.preventDefault();
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const target = elements.find((el) => el.tagName === "TD");
    if (target) {
      if (target.classList.contains("valid")) {
        const i1 = parseInt(target.parentElement!.className);
        const j1 = parseInt(target.className.split(" ")[0]);
        if (validMoves.includes(`${i1}-${j1}`)) {
          gameService.movePiece([i, j], [i1, j1]);
          setBoard(gameService.getBoard());
        }
      }
    }
    resetValidMoves();
  };

  return (
    <>
      <p>
        Static Evaluation: {gameService.evaluateBoard().toFixed(2)} | Minimax:{" "}
        {gameService.minimax(2).toFixed(2)}
      </p>
      <div id="selected" className="piece" />
      <table className="chessboard">
        <tbody>
          {board.map((row, i) => (
            <tr key={i} className={`${i}`}>
              {row.map((piece, j) => {
                const squareId = `${i}-${j}`;
                const squareClass = classnames({
                  [`${j} white`]: (i + j) % 2 === 0,
                  [`${j} black`]: (i + j) % 2 !== 0,
                  valid: validMoves.includes(squareId),
                });
                return (
                  <td key={j} className={squareClass}>
                    {piece && (
                      <Piece
                        type={piece}
                        i={i}
                        j={j}
                        onSelect={(e, i, j) => handleSelect(e, i, j)}
                        onMove={handleMove}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Chessboard;
