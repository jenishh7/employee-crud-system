import React, { useState, useEffect } from "react";
import "../App.css";

const EmployeeForm = ({ onSubmit, onClose, employee, isEdit }) => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    salary: "",
    age: "",
    post: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEdit && employee) {
      setFormData(employee);
    }
  }, [employee, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "dob") {
      const birthYear = new Date(value).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setFormData({ ...formData, [name]: value, age: calculatedAge });
    }
  };

  const validateForm = () => {
    const { age, phone, email } = formData;
    if (age < 18) return "Age must be at least 18.";
    if (phone.length !== 10) return "Phone must be 10 digits.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Invalid email.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }
    setError(null);
    onSubmit(formData);
  };

  return (
    <div className="form-popup">
      <form onSubmit={handleSubmit} className="employee-form">
        <h2>{isEdit ? "Edit Employee" : "Add Employee"}</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} readOnly />
        </div>
        <div className="form-group">
          <label>Post</label>
          <input
            type="text"
            name="post"
            value={formData.post}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {isEdit ? "Update" : "Create"}
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
