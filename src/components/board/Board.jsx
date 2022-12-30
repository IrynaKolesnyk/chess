import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import Cell from "../cell/Cell";
import "./Board.scss";

const chess = new Chess();

const Board = () => {
  const [cells, setCell] = useState([]);

  useEffect(() => {
    const cellsArr = chess.board().map((row, i) => {
      return row.map((piece, j) => {
        if ((i + j) % 2 !== 0) {
          return { piece, color: "black" }; // black cells
        } else {
          return { piece, color: "white" }; // white cells
        }
      });
    });
    setCell(cellsArr);
  }, []);

  return (
    <div className="board">
      {cells.map((row) => {
        return row.map((cell, index) => {
          return <Cell key={index} cell={cell} />;
        });
      })}
    </div>
  );
};

export default Board;

//   const cells = [];

//   for (let y = 0; y < 8; y++) {
//     const row = [];
//     for (let x = 0; x < 8; x++) {
//       if ((y + x) % 2 !== 0) {
//         row.push({ x, y, color: "black" }); // black cells
//       } else {
//         row.push({ x, y, color: "white" }); // white cells
//       }
//     }
//     cells.push(row);
//   }

//   console.log("cells", cells);
//   const newCells = [];

//   cells.forEach((arr) => {
//     arr.forEach((cellObj) => newCells.push(cellObj));
//   });

//   console.log("newCells", newCells);
