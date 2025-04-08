import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {Link, useLocation} from "react-router-dom"
import RecuiterProfile from '../../RecuiterComps/RecuiterProfile/RecuiterProfile'
export const Navbar1 = () => {
  const loc=useLocation()
  const [loggedInRecuiter,setLoggedInRecuiter]=useState(null)
  useEffect(()=>{
    const loggedInRecuiter=JSON.parse(localStorage.getItem("loggedInRecuiter"))
    setLoggedInRecuiter(loggedInRecuiter)
  },[loc])
  return (
    <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className='d-flex gap-4'>
        {loggedInRecuiter ? <RecuiterProfile /> : <>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </>}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
