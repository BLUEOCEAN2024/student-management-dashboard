import React, { useEffect, useState } from 'react';
import StudentList from './components/StudentList';
import { fetchStudents } from './api/studentApi';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(setStudents).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Student Management Dashboard</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;