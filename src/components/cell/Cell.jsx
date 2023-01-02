import Figure from "../figures/Figure";
import "./Cell.scss";

const Cell = ({ cell, onClickCell }) => {
    return (
        <div className="cell" onClick={()=>onClickCell(cell.cellName)}>
            <div className={cell.color}>
                {cell.piece && <Figure piece={cell.piece} />}
            </div>
        </div>
    );
};

export default Cell;
