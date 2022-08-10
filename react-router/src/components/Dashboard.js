import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Dashbord = () => {
    let navigate = useNavigate()
    let data = {
        'name':'sonam'
    }
  return (<>
    
      <h1>Dashbord Page</h1>
    <button onClick={()=>{
navigate("/logout",{state : data})
    }}>Logout</button>
    
  </>
  )
}

export default Dashbord;
