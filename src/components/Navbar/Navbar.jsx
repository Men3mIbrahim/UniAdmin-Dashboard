import React from 'react'
import styles from "./Navbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return <>
    <nav className={styles.navbar}>
      <div className={styles.search}>
        <input type="text" placeholder='Search...' />
      </div>
      <div className={styles.actions}>
        <FaBell className={styles.icon} />
        <div className={styles.profile}>
          <FaUserCircle />
          <span>Admin</span>
        </div>

      </div>

    </nav>

  </>
}
