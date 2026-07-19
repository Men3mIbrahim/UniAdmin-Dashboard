import React from 'react'
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaBuilding,
  FaClipboardList,
  FaUsers,
  FaCog,
} from "react-icons/fa";



import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return <>
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>UniAdmin</h2>
      </div>
      <nav>
        <NavLink to="/" end className={styles.link}>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/students"  className={styles.link}>
          <FaUserGraduate />
          <span>Student</span>
        </NavLink>

        <NavLink to="/courses" className={styles.link}>
          <FaBook />
          <span>Courses</span>
        </NavLink>

        <NavLink to="/departments" className={styles.link}>
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink to="/applications" className={styles.link}>
          <FaClipboardList />
          <span>Applications</span>
        </NavLink>

        <NavLink to="/users" className={styles.link}>
          <FaUsers />
          <span>Users</span>
        </NavLink>

        <NavLink to="/settings" className={styles.link}>
          <FaCog />
          <span>Settings</span>
        </NavLink>




      </nav>
    </aside>
  </>
}
