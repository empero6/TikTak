import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import classes from "./Board.module.css";

const Board = ({ reset, setReset, winner, setWinner }) => {
  // State to determine the count of turns
  const [turn, setTurn] = useState(0);

  // State to determine the current picture of the board
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  // Creating a reference to the board
  const boardRef = useRef(null);

  const tap = (event, space) => {
    console.log(space);
    if (data[space - 1] === "" && winner === "") {
      const currentSpace = turn === 0 ? "x" : "o";

      setData((prevState) => {
        const newData = [...prevState];
        newData[space - 1] = currentSpace;
        return newData;
      });

      setTurn(turn === 0 ? 1 : 0);
    }
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);

    if (boardRef.current?.children) {
      // add null check
      const boardSpaces = boardRef.current.children;

      for (let x = 0; x < 9; x++) {
        boardSpaces[x] = "";
      }
    }

    setTurn(0);
    setWinner("");
    setReset(false);
  }, [reset, setReset, setData]);

  useEffect(() => {
    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    const checkRow = () => {
      let answer = false;
      for (let x = 0; x < 9; x += 3) {
        answer |=
          data[x] === data[x + 1] && data[x] === data[x + 2] && data[x] !== "";
      }
      return answer;
    };

    const checkCol = () => {
      let answer = false;
      for (let x = 0; x < 3; x++) {
        answer |=
          data[x] === data[x + 3] && data[x] === data[x + 6] && data[x] !== "";
      }
      return answer;
    };

    const checkTie = () => {
      let count = 0;
      data.forEach((space) => {
        if (space !== "") {
          count++;
        }
      });
      return count === 9;
    };

    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    if (checkWin()) {
      setWinner(turn === 0 ? "o wins!" : "x wins!");
    } else if (checkTie()) {
      setWinner("Tie");
    }
  });

  return (
    <Box display={"flex"} justifyContent={"center"} ref={boardRef}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            onClick={(e) => tap(e, 1)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[0]}
          </Box>
          <Box
            onClick={(e) => tap(e, 2)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {" "}
            {data[1]}
          </Box>
          <Box
            onClick={(e) => tap(e, 3)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[2]}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            onClick={(e) => tap(e, 4)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[3]}
          </Box>
          <Box
            onClick={(e) => tap(e, 5)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[4]}
          </Box>
          <Box
            onClick={(e) => tap(e, 6)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[5]}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            onClick={(e) => tap(e, 7)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[6]}
          </Box>
          <Box
            onClick={(e) => tap(e, 8)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[7]}
          </Box>
          <Box
            onClick={(e) => tap(e, 9)}
            sx={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "5rem",
            }}
          >
            {data[8]}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Board;
