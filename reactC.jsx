import React from 'react';

// Base Person component
const Person = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Student component, which composes Person
const Student = ({ name, age, course }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>Student Details</h2>
      <Person name={name} age={age} />
      <p>Course: {course}</p>
    </div>
  );
};

// Teacher component, which composes Person
const Teacher = ({ name, age, subject }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>Teacher Details</h2>
      <Person name={name} age={age} />
      <p>Subject: {subject}</p>
    </div>
  );
};

// Main App component
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Person Class Hierarchy in React</h1>
      
      {/* Instantiate a Student */}
      <Student name="Alice" age={20} course="Computer Science" />
      
      {/* Instantiate a Teacher */}
      <Teacher name="Mr. Smith" age={45} subject="Physics" />
    </div>
  );
}

export default App;
