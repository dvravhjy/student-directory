import { useState } from "react";
import styles from "./StudentForm.module.css";

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [status, setStatus] = useState("Regular");
  const [gwa, setGwa] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name,
      course,
      yearLevel: Number(yearLevel),
      status,
      gwa: Number(gwa),
    };

    onAdd(newStudent);

    setName("");
    setCourse("");
    setYearLevel("");
    setStatus("Regular");
    setGwa("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <input
        className={styles.input}
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="number"
        min="1"
        placeholder="Year Level"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
        required
      />

      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>

      <input
        className={styles.input}
        type="number"
        step="0.01"
        min="1"
        max="5"
        placeholder="GWA"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
        required
      />

      <button className={styles.button} type="submit">
        Add Student
      </button>
    </form>
  );
}
