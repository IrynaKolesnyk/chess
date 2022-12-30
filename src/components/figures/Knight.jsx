import blackFigure from "../../images/black-knight.png";
import whiteFigure from "../../images/white-knight.png";

const Knight = ({ color }) => (
  <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
);

export default Knight;
