import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/mainContainer/mainContainer"
import Login from "./components/login/login";
import UserDashboard from "./scenes/userDashboard/UserDashboard"
import InterviewerDashboard from "./scenes/interviewerDashboard/InterviewerDashboard"
import {ColorModeContext,useMode} from './theme'
import { CssBaseline,ThemeProvider } from "@mui/material";

function App() {
  const [theme,colorMode]=useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="userDashboard" element={<UserDashboard/>}></Route>         
            <Route path="interviewerDashboard" element={<InterviewerDashboard/>}></Route>         
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
