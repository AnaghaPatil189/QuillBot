import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import Progressbar from "./Progressbar";

export default function DisplayImage(props) {
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
   setCurrentIndex(props.item) 
  },[props.item])

  const imageUrls = [
    "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
    "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
    "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
    "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  function handleButton1Click() {
    setCurrentIndex(0);
  }

  function handleButton2Click() {
    setCurrentIndex(1);
  }

  function handleButton3Click() {
    setCurrentIndex(2);
  }

  function handleButton4Click() {
    setCurrentIndex(3);
  }

  return (
    <>
      <Box className="home" >
        <Box className="bottom">
          <Box className="imageChange" >
            <img src={imageUrls[currentIndex]} className='img' alt="Selected image" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
