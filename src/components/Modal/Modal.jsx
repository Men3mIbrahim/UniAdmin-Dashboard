import React from 'react'
import styles from "./Modal.module.css";

export default function Modal({ data, onClose }) {
    return <>
        <div className={styles.modal}>

            <h2>Student Details</h2>
            <p>Name: {data.name}</p>
            <p>Program: {data.program}</p>
            <p>Status: {data.status}</p>
            <button className={styles.btn} onClick={onClose}>
                Close
            </button>

        </div>
    </>
}
