import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export default function ProgressBar(props) {
  const { heading, text } = props;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return;
        }

        return Math.min(oldProgress + 10, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "60%" }} >
      <Typography sx={{ color: "#499557", fontWeight: "bold",marginTop:"8%" }} variant="h6">
        {heading}
      </Typography>
      <Typography
        sx={{ fontFamily: "font-family: 'Open Sans',sans-serif", marginBottom:"2%"}}
        variant="body1"
      >
        {text}
      </Typography>
      <LinearProgress variant="determinate" className="bar" value={progress} />
    </Box>
  );
}
