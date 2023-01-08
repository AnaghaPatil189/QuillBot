import "./App.css";
import Pricing from "./components/Pricing";
import ProCircular from "./components/ProCircular";
import { Typography } from "@mui/material";
import Mainpage from "./components/Mainpage";

function App() {
  
  return (
    <div className="App">
      <Mainpage />
      <Pricing />
      <Typography sx={{marginTop:"25px"}} align="center" variant="h4">
        Write better, faster and clearer instantly
      </Typography>
      <Typography align="center">
        QuillBot is trusted by students, professional writers, and
        <br /> business people who want to write more effectively.
      </Typography>
      <div className="componentContainer">
        <div className="circle">
          <ProCircular
            percentage={75}
            circletext="time saved"
            text="Average time Savings Per writing project"
          />
          <ProCircular
            percentage={50}
            circletext="Million"
            text="Average time Savings Per writing project"
          />
          
          <ProCircular
            percentage={80}
            circletext="of students"
            text="Who reported their grades improved after using QuillBot."
          />
        </div>
      </div>
    </div>
  );
}

export default App;

