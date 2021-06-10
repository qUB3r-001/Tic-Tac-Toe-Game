function Box({ id, onClick, value }) {
  return (
    <div className="box text-center border-0">
      <button
        className={`border-0 ${value === "X" ? "red" : "blue"}`}
        id={id}
        onClick={() => {
          return onClick(id);
        }}
        value={value}
      >
        {value}
      </button>
    </div>
  );
}

function Board({ board, onDraw, start, winnerPos, winner }) {
  return (
    <div className="position-relative">
      <div
        className={`winning-line ${
          winner === "X" ? "win-line-col-r" : "win-line-col-g"
        }`}
        style={winnerPos}
      ></div>
      <div className="background">
        {board.map((curBox, i) => (
          <Box key={i} id={start ? i : null} onClick={onDraw} value={curBox} />
        ))}
        <div className="playing-board">
          <div className="v-blocks"></div>
          <div className="h-blocks"></div>
        </div>
      </div>
    </div>
  );
}

export default Board;
