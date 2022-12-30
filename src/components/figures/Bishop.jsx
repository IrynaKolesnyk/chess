import blackFigure from "../../images/black-bishop.png";
import whiteFigure from "../../images/white-bishop.png";

const Bishop = ({ color }) => (
  <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
);

export default Bishop;
