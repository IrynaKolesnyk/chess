import Figure from "../figures/Figure";
import "./Cell.scss";
import { Chess } from "chess.js";

const chess = new Chess();

const Cell = ({ cell, onClickCell }) => {
    let available = true;

    if (cell?.piece?.color !== chess.turn()) {
        available = false;
    }

    const onClick = () =>{
        onClickCell(cell);
    }

    return (
        <div className={['cell', !available ? "disabled" : ''].join(' ')} onClick={onClick}>
            <div className={cell.color}>
                {cell.piece && <Figure piece={cell.piece} />}
            </div>
        </div>
    );
};

export default Cell;
