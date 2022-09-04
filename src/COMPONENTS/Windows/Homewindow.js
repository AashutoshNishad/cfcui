import React from "react";
import "./windows.css";
import graphic_001 from "./5483080_2842680.jpg";

import ashu from "./CFC.jpg";
import { Button, Container, Typography } from "@mui/material";
// import { fontSize } from "@mui/system";
export default function Homewindow() {
  return (
    <>
      <Container  sx={{textAlign: "center", padding: "35px", boxSizing: "border-box" , backgroundColor: "#ebdbdb" , width: "100%"}}>
        <Typography mt={2} variant="h3" style={{wordBreak: "keep-all"}}>
          Code for Community
        </Typography>
        <Typography mt={5}  mb={2}>
          A coding club of GEC Raipur.
        </Typography>
       <Button style={{padding: "10px" , backgroundColor: "black" , color: "white"}} >About CFC</Button>
      </Container>
    </>
  );
}
