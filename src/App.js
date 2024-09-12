import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleAddClick = () => {
    setEditEmployee(null);
    setShowForm(true);
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (employee) => {
    if (editEmployee) {
      // Update existing employee
      setEmployees(employees.map(emp => emp === editEmployee ? employee : emp));
    } else {
      // Add new employee
      setEmployees([...employees, employee]);
    }
    setShowForm(false);
  };

  return (
    <div className="App">
      <button className='add-btn' onClick={handleAddClick}>Add Employee</button>
      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && (
        <EmployeeForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
          employee={editEmployee}
          isEdit={!!editEmployee}
        />
      )}
    </div>
  );
};

export default App;
