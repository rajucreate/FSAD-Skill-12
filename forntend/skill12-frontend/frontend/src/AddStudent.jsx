import React, { useState } from "react";
import axios from "axios";

function AddStudent({ refresh, selected, setSelected }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const isEditing = Boolean(selected?.id);
  const formData = isEditing ? selected || {} : student;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isEditing) {
      setSelected({ ...selected, [name]: value });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = () => {
    const payload = isEditing ? selected : student;

    // 🔥 validation
    if (!payload.name || !payload.email || !payload.course) {
      alert("All fields are required");
      return;
    }

    if (isEditing) {
      axios.put(`/students/${selected.id}`, payload)
        .then(() => {
          refresh();
          setStudent({ name: "", email: "", course: "" });
          setSelected(null);
        })
        .catch(err => console.error(err));
    } else {
      axios.post("/students", payload)
        .then(() => {
          refresh();
          setStudent({ name: "", email: "", course: "" });
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h2>{isEditing ? "Update Student" : "Add Student"}</h2>

      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" />

      <button onClick={handleSubmit}>
        {isEditing ? "Update" : "Add"}
      </button>

      {isEditing && (
        <button onClick={() => setSelected(null)}>Cancel</button>
      )}
    </div>
  );
}

export default AddStudent;