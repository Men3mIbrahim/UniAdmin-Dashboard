import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import styles from "./Layout.module.css";

export default function Layout() {
  return <>
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Navbar />

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  </>
}
