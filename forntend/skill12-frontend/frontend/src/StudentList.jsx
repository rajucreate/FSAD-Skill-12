import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ reload, setSelected }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get("/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchStudents();
  }, [reload]);

  const deleteStudent = (id) => {
    axios.delete(`/students/${id}`)
      .then(() => fetchStudents());
  };

  return (
    <div>
      <h2>Students</h2>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        students.map(s => (
          <div key={s.id}>
            {s.name} | {s.email} | {s.course}

            <button onClick={() => setSelected(s)}>Update</button>
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;