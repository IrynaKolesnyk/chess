import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { cellsArr } from "../../utils/commonFunctions";
import Cell from "../cell/Cell";
import "./Board.scss";

const chess = new Chess();

const Board = () => {
    const [cells, setCells] = useState([]);
    const [moveFrom, setMoveFrom] = useState("");
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const initialBoard = chess.board();
        setCells(cellsArr(initialBoard));
    }, []);

    const onMove = (from, to) => {
        chess.move({ from: from, to: to }); // example({ from: "a2", to: "a4" });
        const newBoard = cellsArr(chess.board());
        setCells(newBoard);
        setMoveFrom("");
        isGameOver();
    };

    const onClickCell = (cell) => {
        const {cellName, piece } = cell;
        
        if (!moveFrom && piece?.color !== chess.turn()) return; //if piece is not selected and cell does not have piece return

        if (moveFrom === "") {
            setMoveFrom(cellName);
            return;
        }

        onMove(moveFrom, cellName);
    };

    const isGameOver = () => {
        const isGameOver = chess.isGameOver();

        isGameOver && setGameOver(isGameOver);
    };

    const isActive = (cellName) => {
        return cellName === moveFrom;
    };

    const onRestart = () => {
        chess.reset()
        const initialBoard = chess.board();
        setCells(cellsArr(initialBoard));
    };

    return (
        <>
            {gameOver && <h1>You finished the game</h1>}
            <div className="board">
                {cells.map((row) => {
                    return row.map((cell, index) => {
                    return <Cell key={index} cell={cell} onClickCell={onClickCell} active={isActive(cell.cellName)} />;
                    });
                })}
            </div>
            <button tupe='button' onClick={onRestart}>restart</button>
        </>
    );
};

export default Board;
