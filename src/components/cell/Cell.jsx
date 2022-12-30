import Figure from "../figures/Figure";
import "./Cell.scss";

const Cell = ({ cell }) => {
  return (
    <div className="cell">
      <div className={cell.color}>
        {cell.piece && <Figure piece={cell.piece} />}
      </div>
    </div>
  );
};

export default Cell;
