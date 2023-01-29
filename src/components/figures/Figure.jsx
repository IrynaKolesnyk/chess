import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Rook from "./Rook";

import "./Figure.scss";

const Figure = ({ piece, active }) => {
  const figure = () => {
    switch (piece.type) {
      case "p":
        return <Pawn color={piece.color} />;
      case "b":
        return <Bishop color={piece.color} />;
      case "r":
        return <Rook color={piece.color} />;
      case "q":
        return <Queen color={piece.color} />;
      case "n":
        return <Knight color={piece.color} />;
      case "k":
        return <King color={piece.color} />;
      default:
        return <div></div>;
    }
  };

  return <div className={['figure', active ? "active" : ''].join(' ')}>{figure()}</div>;
};

export default Figure;
