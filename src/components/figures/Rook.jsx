import blackFigure from "../../images/black-rook.png";
import whiteFigure from "../../images/white-rook.png";

const Rook = ({ color }) => (
  <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
);

export default Rook;
