import React from "react";
// import Play from "./Play";
import Fab from "@material-ui/core/Fab";
import ReplayIcon from "@material-ui/icons/Replay";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Stats({ heading, headingStyle, winner, draw, xTurn, mode, reset }) {
  return (
    <React.Fragment>
      <h1 className={headingStyle}>{heading}</h1>
      <h2 className="mode text-center">{mode}</h2>
      <div className="row mt-5">
        <div className="col-6 text-center px-0">
          <h2 className={`mt-3`}>
            Player:{" "}
            {winner === null && draw === false
              ? xTurn
                ? "X"
                : "O"
              : "GAME OVER"}
          </h2>
          {(winner || draw) && (
            <Fab onClick={reset} className="reset">
              <ReplayIcon />
            </Fab>
          )}
        </div>
        <div className="col-6">
          <HelpOutlineIcon />
        </div>
      </div>

      {/* <Play /> */}
    </React.Fragment>
  );
}

export default Stats;
