import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const RecuiterProfile = () => {
    const navigate=useNavigate()
    const [openProfile,setOpenProfile]=useState(false)
    const logout=()=>{
        localStorage.removeItem("loggedInRecuiter");
        navigate("/login")
    }
  return (
    <div>
        <FaRegUser onClick={()=>setOpenProfile(!openProfile)} style={{color:"white"}}/>

            {openProfile && <>
            
            <button onClick={()=>navigate("/recuiter_profile_details")}>profile</button>
            <button onClick={logout}>logout</button>
            </>}
    </div>
  )
}

export default RecuiterProfile