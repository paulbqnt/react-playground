import './App.css';
// import { MuiButton } from './components/MuiButton';
import {MuiTextField} from "./components/MuiTextField";
// import { MuiTypography } from "./components/MuiTypography";
import { MuiSelect } from "./components/MuiSelect"
import {MuiRadioButton} from "./components/MuiRadioButton";
import {FormHelperText} from "@mui/material";
import {MuiCheckbox} from "./components/MuiCheckbox";
import {MuiSwitch} from "./components/MuiSwitch";

// https://www.youtube.com/watch?v=K0HzYQDohvE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=12

function App() {
  return (
    <div className="App">
      {/*<MuiTypography />*/}
      {/*  <MuiButton />*/}
      {/*  <MuiTextField/>*/}
      {/*  <MuiSelect/>*/}
      {/*<MuiRadioButton/>*/}
      {/*  <MuiCheckbox/>*/}
      <MuiSwitch/>
    </div>
  );
}

export default App;
