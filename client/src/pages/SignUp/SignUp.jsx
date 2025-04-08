import React, { useState } from "react";
import axios from "axios";
import { Form,Button } from "react-bootstrap";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      console.log(res)
      alert("Signup successful!");
      console.log(formData);
    } catch (err) {
      alert(err.response?.data?.message || err);
    }
  };
  return (
    <>
      <Form onSubmit={handleSignup} className="w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:--</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
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
        <Form.Select onChange={handleChange} name="role">
            <option>choose your role</option>
          <option value="recuiter">Recuiter</option>
          <option value="job_seeker">Job Seeker</option>
        </Form.Select>
        <Button variant="primary" type="submit"
          className="mb-3"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
