import React, { useEffect, useState } from 'react';
import StudentList from '../components/StudentList';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}
export default Students;