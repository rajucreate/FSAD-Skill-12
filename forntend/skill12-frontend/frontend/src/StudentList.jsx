import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ reload, setSelected }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, [reload]);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(fetchStudents);
  };

  return (
    <div>
      <h2>Students</h2>

      {students.map(s => (
        <div key={s.id}>
          {s.name} | {s.email} | {s.course}

          <button onClick={() => setSelected(s)}>Update</button>

          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;