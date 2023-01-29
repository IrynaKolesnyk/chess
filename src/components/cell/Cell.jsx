import Figure from "../figures/Figure";
import "./Cell.scss";

const Cell = ({ cell, onClickCell, active }) => {

    const onClick = (e) => {
        onClickCell(cell);
    };

    return (
        <div className='cell' onClick={onClick}>
            <div className={cell.color}>
                {cell.piece && <Figure piece={cell.piece} active={active}/>}
            </div>
        </div>
    );
};

export default Cell;
