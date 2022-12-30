import blackFigure from "../../images/black-queen.png";
import whiteFigure from "../../images/white-queen.png";

const Queen = ({ color }) => (
  <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
);

export default Queen;
