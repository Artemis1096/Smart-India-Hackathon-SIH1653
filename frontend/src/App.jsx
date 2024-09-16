import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/mainContainer/mainContainer"
import Login from "./components/login/login";
import UserDashboard from "./scenes/userDashboard/UserDashboard"
import InterviewerDashboard from "./scenes/interviewerDashboard/InterviewerDashboard"
import {ColorModeContext,useMode} from './theme'
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Navbar";
import SideBar from "./scenes/global/Sidebar";
import Calendar from "./scenes/calendar/index"
function App() {
  const [theme,colorMode]=useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar/>
        <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="userDashboard" element={<UserDashboard/>}></Route>         
            <Route path="interviewerDashboard" element={<InterviewerDashboard/>}></Route>         
            <Route path="calendar" element={<Calendar/>}></Route>         
          </Route>
        </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
