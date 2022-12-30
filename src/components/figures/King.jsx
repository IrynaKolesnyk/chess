import blackFigure from "../../images/black-king.png";
import whiteFigure from "../../images/white-king.png";

const King = ({ color }) => {
  return (
    <img alt="chess figure" src={color === "b" ? blackFigure : whiteFigure} />
  );
};

export default King;
