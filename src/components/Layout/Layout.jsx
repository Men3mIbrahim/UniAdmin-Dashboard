import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import styles from "./Layout.module.css";
import PageTransition from './../PageTransition/PageTransition';

export default function Layout() {
  return <>
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Navbar />

        <main className={styles.main}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  </>
}
