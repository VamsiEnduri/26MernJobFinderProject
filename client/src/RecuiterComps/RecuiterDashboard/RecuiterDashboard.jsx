import React from 'react'
import {useNavigate} from "react-router-dom"
const RecuiterDashboard = () => {
    const nav=useNavigate()
  return (
    <div>
        <button onClick={()=>nav("/recuiter_post_job")}>postJob</button>
    </div>
  )
}

export default RecuiterDashboard