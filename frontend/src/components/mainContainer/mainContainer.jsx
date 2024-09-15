import React from 'react'
import { Outlet } from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const MainContainer = () => {
  const navigate=useNavigate();
  return (
    <div>MainContainer
      {/* <button onClick={navigate("/app/userDashboard")}>ds</button> */}
      <Outlet />
    </div>
  )
}

export default MainContainer