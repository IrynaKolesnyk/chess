import blackFigure from "../../images/black-pawn.png";
import whiteFigure from "../../images/white-pawn.png";

const Pawn = ({ color }) => (
  <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
);

export default Pawn;
