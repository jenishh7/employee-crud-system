import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Post</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.fname}</td>
            <td>{employee.mname}</td>
            <td>{employee.lname}</td>
            <td>{employee.dob}</td>
            <td>{employee.salary}</td>
            <td>{employee.age}</td>
            <td>{employee.post}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>
              <FaEdit className="action-icon" onClick={() => onEdit(employee)} />
              <FaTrash className="action-icon" onClick={() => onDelete(index)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
