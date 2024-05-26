import "../styles/Chessboard.css";

function Piece({
  type,
  i,
  j,
  onSelect,
  onMove,
}: {
  type: string;
  i: number;
  j: number;
  onSelect: (e: React.DragEvent, i: number, j: number, type: string) => void;
  onMove: (e: React.DragEvent, i: number, j: number) => void;
}) {
  return (
    <div
      className={`piece ${type}`}
      draggable
      onDragStart={(e) => onSelect(e, i, j, type)}
      onDragEnd={(e) => onMove(e, i, j)}
    />
  );
}

export default Piece;
