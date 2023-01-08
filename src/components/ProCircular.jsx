import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProCircular(props) {
  const { circletext, text } = props;
  return (
    <div className="circle-container">
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size="8rem"
          sx={{ color: "rgb(73, 149, 87)" }}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            component="div"
            color="rgb(73, 149, 87)"
          >
            {circletext != "Million"
              ? `${Math.round(props.value)}%`
              : `${Math.round(props.value)}+`}

            <Typography>{circletext}</Typography>
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ width: "21rem" }} variant="h6">
        {text}
      </Typography>
    </div>
  );
}

export default function CircularStatic(props) {
  const { percentage, circletext, text } = props;
  //console.log(props);
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    let percent;
    if (percentage == 50) {
      percent = 100;
    } else percent = percentage;
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= percentage ? percentage : prevProgress + 5
      );
    }, 350);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ProCircular
      value={progress}
      circletext={circletext}
      text={text}
    />
  );
}
