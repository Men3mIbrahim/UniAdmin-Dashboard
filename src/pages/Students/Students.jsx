import React from 'react'
import Table from "../../components/Table/Table";
import { useState } from "react";
import styles from "./Students.module.css";
import Modal from "../../components/Modal/Modal";


export default function Students() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const students = [
    {
      name: "Ahmed",
      department: "Computer Science",
      gpa: 3.5
    },
    {
      name: "Ali",
      department: "Information Technology",
      gpa: 3.2
    }
  ];

  const columns = [
    "Name",
    "Department",
    "GPA"
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleView(student) {
    setSelectedStudent(student);
    setShowModal(true);
  }

  return <>
    <h1>Students</h1>

    <input
      className={styles.search}
      type="text"
      placeholder="Search student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <Table
      columns={columns}
      data={filteredStudents}
      onView={handleView}
    />

    {showModal && (
    <Modal
        data={selectedStudent}
        onClose={() => setShowModal(false)}
    />
)}
  </>
}
