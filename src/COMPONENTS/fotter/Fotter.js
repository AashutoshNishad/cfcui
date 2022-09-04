import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";

export default function Fotter() {
  var st = {
    position: "relative",
    bottom: "0%",
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  };
  return (
    <div
      style={st}
    >
      <div>
        <Tabs>
          <Tab sx={{ color: "white" }} label="Home" />
          <Tab sx={{ color: "white" }} label="Events" />
          <Tab sx={{ color: "white" }} label="Our Team" />
          <Tab sx={{ color: "white" }} label="About Us" />
          {/* <Tab sx={{color: "white"}} label="Home" /> */}
        </Tabs>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography>CFC</Typography>
        <Typography>aashutoshnishad147@gmail.com</Typography>
      </div>
    </div>
  );
}
