import React, { useState } from "react";
import { PvP, PvBot } from "./interface/1v1";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FaceIcon from "@material-ui/icons/Face";
import ComputerIcon from "@material-ui/icons/Computer";
import Footer from "./components/Footer";

function Tictactoe() {
  //state to select gameplay mode
  const [mode, setMode] = useState("1v1");

  //Styles for the mode selection buttons from MaterialsUI
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          width: "180px",
          height: "70px",
          fontSize: "1.2em",
          borderRadius: "40px",
        },
      },
      MuiSvgIcon: {
        root: {
          margin: "0 5px",
        },
      },
    },
  });

  //Highlight on selection of Button to indicate active mode
  const buttonStyles1v1 =
    mode === "1v1"
      ? {
          backgroundColor: "#ff1439",
          boxShadow: "0 0 20px #ff1439",
          opacity: 1,
        }
      : null;
  const buttonStyles1vAi =
    mode === "1vBot"
      ? {
          backgroundColor: "#27b376",
          boxShadow: "0 0 20px #27b376",
          opacity: 1,
        }
      : null;

  return (
    <React.Fragment>
      <div className="bg-wrapper">
        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="138"
          height="136"
          viewBox="0 0 138 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="134.497"
            x2="134.497"
            y2="1.93934"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
          <line
            x1="4.06063"
            y1="1.93934"
            x2="136.619"
            y2="134.497"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="138"
          height="136"
          viewBox="0 0 138 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="134.497"
            x2="134.497"
            y2="1.93934"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
          <line
            x1="4.06063"
            y1="1.93934"
            x2="136.619"
            y2="134.497"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="138"
          height="136"
          viewBox="0 0 138 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="134.497"
            x2="134.497"
            y2="1.93934"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
          <line
            x1="4.06063"
            y1="1.93934"
            x2="136.619"
            y2="134.497"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="138"
          height="136"
          viewBox="0 0 138 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="134.497"
            x2="134.497"
            y2="1.93934"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
          <line
            x1="4.06063"
            y1="1.93934"
            x2="136.619"
            y2="134.497"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="138"
          height="136"
          viewBox="0 0 138 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="134.497"
            x2="134.497"
            y2="1.93934"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
          <line
            x1="4.06063"
            y1="1.93934"
            x2="136.619"
            y2="134.497"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg>

        {/* <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="68"
            cy="68"
            r="66.5"
            fill="white"
            stroke="#C9C9C9"
            strokeWidth="3"
          />
        </svg> */}
      </div>
      <div className="board p-3">
        {/* The component for both modes depending on which mode is selected */}
        {mode === "1v1" ? <PvP /> : <PvBot />}
        {/* The mode selection buttons */}
        <div className="d-flex justify-content-center p-3">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              className="mx-4 play-button"
              onClick={() => setMode((currMode) => "1v1")}
              style={buttonStyles1v1}
            >
              <FaceIcon fontSize="large" />
              VS
              <FaceIcon fontSize="large" />
            </Button>
            <Button
              variant="contained"
              className="mx-4 play-button"
              onClick={() => setMode((currMode) => "1vBot")}
              style={buttonStyles1vAi}
            >
              <FaceIcon fontSize="large" />
              VS
              <ComputerIcon fontSize="large" />
            </Button>
          </ThemeProvider>
        </div>
        {/* The footer text */}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Tictactoe;
