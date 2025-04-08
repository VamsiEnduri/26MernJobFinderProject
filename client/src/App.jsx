import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/SignUp/Home";
import Login from "./pages/Login/Login";
import { Navbar1 } from "./Components/Navbar/Navbar";
import RecuiterDashboard from "./RecuiterComps/RecuiterDashboard/RecuiterDashboard";
import RecruiterProfileDetails from "./RecuiterComps/RecuiterProfileDetails/RecuiterProfileDetails";
import RecuiterPostJob from "./RecuiterComps/RecuiterPostJob/RecuiterPostJob";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuiter_dashboard" element={<RecuiterDashboard  />} />
          <Route path="/recuiter_profile_details" element={<RecruiterProfileDetails />} />
          <Route path="/recuiter_post_job" element={<RecuiterPostJob />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
