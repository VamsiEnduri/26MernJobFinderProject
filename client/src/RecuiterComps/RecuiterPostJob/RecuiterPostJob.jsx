import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const RecuiterPostJob = () => {
  const navigate=useNavigate()

  const [job, setJob] = useState({
    title: '',
    description: '',
    category: '',
    salary: '',
    location: '',
  });



  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const recruiterEmail=JSON.parse(localStorage.getItem("loggedInRecuiter"))
      await axios.post(`http://localhost:5000/api/recuitersJobs/post_job`, {
        email:recruiterEmail,
        ...job
      });
      alert('Job posted successfully!');
      setTimeout(() => {
       navigate("/recuiter_dashboard")
      }, 1000);
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <Card className="mt-4 p-3">
      <h4 className="mb-3">Post a New Job</h4>
      
    
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter job title"
            value={job.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Describe the job role"
            value={job.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={job.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            placeholder="e.g., 6-8 LPA"
            value={job.salary}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="e.g., Remote / Hyderabad"
            value={job.location}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="success" type="submit">Post Job</Button>
          
        </div>
      </Form>
    </Card>
  );
};

export default RecuiterPostJob;
