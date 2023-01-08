import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { borderRadius, Box, fontSize, width } from "@mui/system";
import Progressbar from "./ProgressBar";
import DisplayImage from "./DisplayImage";

export default function Mainpage() {
  const [itemNo,setItemNo] = useState(0);
 
  return (
    <div className="container-mainpage">
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        sx={{ marginTop: "50px" }}
      >
        Save time and write with confidence
      </Typography>
      <Button
        sx={{
          textTransform: "capitalize",
          padding: "0.6rem",
          width: "auto",
          borderRadius: "20px",
          backgroundColor: "#499557",
          pl: "5%",
          pr: "5%",
          marginTop: "20px",
          fontSize:"18px"
        }}
        variant="contained"
      >
        Upgrade to QuillBot Premium
      </Button>
      <div className="cards">
        <div className="cards-change">
          <DisplayImage item={itemNo}/>
        </div>
        <div className="progressbar">
        <div onClick={()=>setItemNo(0)}>
          <Progressbar
            heading="Increase your productivity"
            text="Paraphrase more text at once to finish writing faster."
          />
          </div>
          <div onClick={()=>setItemNo(1)}>
          <Progressbar
            heading="Access all modes"
            text="Get maximum control over how you paraphrase."
          />
          </div>
          <div onClick={()=>setItemNo(2)}>
          <Progressbar
            heading="Scan for plagiarism"
            text="Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized."
            />
            </div>
            <div onClick={()=>setItemNo(3)}>
          <Progressbar
            heading="Compare all mode outputs at once"
            text="Paraphrase in and compare outputs from all seven modes."
          />
          </div>
        </div>
      </div>
    </div>
  );
}
