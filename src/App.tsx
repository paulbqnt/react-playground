import './App.css';
// import { MuiButton } from './components/MuiButton';
import {MuiTextField} from "./components/MuiTextField";
// import { MuiTypography } from "./components/MuiTypography";
import { MuiSelect } from "./components/MuiSelect"
import {MuiRadioButton} from "./components/MuiRadioButton";
import {FormHelperText} from "@mui/material";

// https://www.youtube.com/watch?v=9L0QhB-6xBI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=10


function App() {
  return (
    <div className="App">
      {/*<MuiTypography />*/}
      {/*  <MuiButton />*/}
      {/*  <MuiTextField/>*/}
      {/*  <MuiSelect/>*/}
      <MuiRadioButton/>
    </div>
  );
}

export default App;
