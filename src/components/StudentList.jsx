import React from 'react';

function StudentList({ students }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(stu => (
          <tr key={stu.id}>
            <td>{stu.name}</td>
            <td>{stu.email}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default StudentList;