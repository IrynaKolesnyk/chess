import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { cellsArr } from "../../utils/commonFunctions";
import Cell from "../cell/Cell";
import "./Board.scss";

const chess = new Chess();

const Board = () => {
  const [cells, setCells] = useState([]);
  const [moveFrom, setMoveFrom] = useState("");

  useEffect(() => {
    const initialBoard = chess.board();
    setCells(cellsArr(initialBoard));
  }, []);

  const onMove = (from, to) => {
    chess.move({ from: from, to: to }); // example({ from: "a2", to: "a4" });
    const newBoard = cellsArr(chess.board());
    setCells(newBoard);
    setMoveFrom("");
  };

  const onClickCell = (cellName) => {
    if (moveFrom === "") {
      setMoveFrom(cellName);
      return;
    }

    onMove(moveFrom, cellName);
  };

  return (
    <div className="board">
        {cells.map((row) => {
            return row.map((cell, index) => {
            return <Cell key={index} cell={cell} onClickCell={onClickCell} />;
            });
        })}
    </div>
  );
};

export default Board;
