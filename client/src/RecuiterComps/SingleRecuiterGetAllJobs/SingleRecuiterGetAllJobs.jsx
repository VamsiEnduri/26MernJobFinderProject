import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const SingleRecuiterGetAllJobs = () => {
  const navigate = useNavigate();
  const [jobs, setAllJobs] = useState([]);

  async function getJobs() {
    try {
      const loggedInRecuiter = JSON.parse(
        localStorage.getItem("loggedInRecuiter")
      );
      const res = await axios.get(
        "http://localhost:5000/api/recuiter-job_posts/getAllJobs",
        {
          headers: {
            "x-recuiter-email": loggedInRecuiter,
          },
        }
      );
      console.log(res.data.jobs);
      setAllJobs(res.data.jobs);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getJobs();
  }, []);

  async function handleDleteJob(id) {
    try{
        const loggedInRecuiter=JSON.parse(localStorage.getItem("loggedInRecuiter"))
             const res=    await axios.delete(`http://localhost:5000/api/recuiter_jobs/deleting/${id}`,{headers:{
                "x-recuiter-email":loggedInRecuiter
             }})
             console.log(res)
             setAllJobs(jobs.filter(job => job._id !== id));
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div>
      SingleRecuiterGetAllJobs
      {jobs.length > 0 ? (
        <>
          {jobs.map((x) => {
            return (
              <>
                <p>{x.title}</p>
                <button onClick={()=>handleDleteJob(x._id)}>delete</button>
                <button onClick={() => navigate(`/job_applications/${x._id}`)}>
                  viewApplications
                </button>
              </>
            );
          })}
        </>
      ) : (
        "no jobs found"
      )}
    </div>
  );
};
