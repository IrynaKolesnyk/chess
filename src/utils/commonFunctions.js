export const cellsArr = (arr) => {
  const arrCells = arr.map((row, i) => {
    return row.map((piece, j) => {
      const cellName = String.fromCharCode("a".charCodeAt(0) + j) + (8 - i); //charcode for latters a-h for rows 1-8 and convert to strring "a2" atc.
      if ((i + j) % 2 !== 0) {
        return { cellName, piece, color: "black" }; // black cells
      } else {
        return { cellName, piece, color: "white" }; // white cells
      }
    });
  });

  return arrCells;
};