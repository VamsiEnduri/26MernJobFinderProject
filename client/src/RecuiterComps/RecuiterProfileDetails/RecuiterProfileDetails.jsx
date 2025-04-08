import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const RecruiterProfileDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    company: "",
    designation: "",
    experience: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all inputs from formData
    data.append("name", formData.fullName);
    data.append("company", formData.company);
    data.append("email", formData.email);
    data.append("designation", formData.designation);
    data.append("experience", formData.experience);
    if (image) {
      data.append("profileImage", image);
    }

    try {
    const profileDetails= await axios.post("http://localhost:5000/api/recuiters/profile",data,{
        headers:{"Content-Type":"multipart/form-data"}
     })
     console.log(profileDetails)
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save profile");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Recruiter Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Experience (in years)</Form.Label>
          <Form.Control
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Years of experience"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Profile Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Profile
        </Button>
      </Form>
    </Container>
  );
};

export default RecruiterProfileDetails;
