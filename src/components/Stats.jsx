import React from "react";
import Fab from "@material-ui/core/Fab";
import ReplayIcon from "@material-ui/icons/Replay";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

//All the information including the heading, mode, winner and start-reset buttons
function Stats({ winner, draw, start, begin, xTurn, mode, reset }) {
  const headingStyle =
    winner !== null ? (winner === "X" ? "red" : "green") : null;
  const heading =
    winner === null ? (
      draw ? (
        "Draw"
      ) : (
        <div className="blink">
          <span>Tic </span>
          <span>Tac </span>
          <span>Toe</span>
        </div>
      )
    ) : (
      winner + " Won"
    );
  const headingInfo =
    winner === null && draw === false
      ? xTurn
        ? " Player: X"
        : " Player: O"
      : "GAME OVER";

  return (
    <div className="text-center">
      <h1 className={headingStyle}>{heading}</h1>
      <h3>{winner === null && draw === false ? mode : ""}</h3>
      <h3>{headingInfo}</h3>
      {/* The start and reset buttons */}
      <div className="d-flex justify-content-center p-3">
        <Fab
          onClick={() => {
            begin((currVal) => !currVal);
          }}
          className="reset mx-4"
          disabled={start}
        >
          <PlayArrowIcon />
        </Fab>
        <Fab
          onClick={reset}
          className="reset mx-4"
          disabled={!(winner || draw)}
        >
          <ReplayIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Stats;
