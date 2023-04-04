import { Box, Button } from "@mui/material";
import { useState } from "react";
import Board from "./components/Board";
import { Fragment } from "react";

const App = () => {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <Fragment>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      {winner !== "" ? (
        <Box sx={{ textAlign: "center", fontSize: "5rem" }}>
          {winner}
          <Box>
            <Button onClick={() => resetBoard()}>Reset</Button>
          </Box>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Fragment>
  );
};

export default App;
