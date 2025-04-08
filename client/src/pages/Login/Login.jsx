import React, { useState } from "react";
import axios from "axios";
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      console.log(res)
      alert("login  successful!");
      localStorage.setItem("loggedInRecuiter",JSON.stringify(formData.email))
      navigate("/recuiter_dashboard")
      console.log(formData);
    } catch (err) {
      alert(err.response?.data?.message || err);
    }
  };
  return (
    <>
      <Form onSubmit={handleSignup} className="w-50 m-auto">

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
            name="email"
            onChange={handleChange}
          
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
        //   controlId="formBasicPassword"
         
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"name="password"  onChange={handleChange}  />
        </Form.Group>
        
        <Button variant="primary" type="submit"
          className="mb-3"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
