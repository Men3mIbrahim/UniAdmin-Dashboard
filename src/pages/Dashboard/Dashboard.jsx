import Card from "../../components/Cards/Cards";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import BarCharts from "../../components/BarCharts/BarCharts";
import ChartCard from "../../components/ChartCard/ChartCard";
import Charts from './../../components/Charts/Charts';
import styles from "./Dashboard.module.css";
import Table from './../../components/Table/Table';
import {
  FaUserGraduate,
  FaBook,
  FaBuilding,
  FaClipboardList
} from "react-icons/fa";


export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);


  const cards = [
    {
      title: "Students",
      value: 1200,
      icon: FaUserGraduate
    },
    {
      title: "Courses",
      value: 50,
      icon: FaBook
    },
    {
      title: "Departments",
      value: 12,
      icon: FaBuilding
    },
    {
      title: "Applications",
      value: 80,
      icon: FaClipboardList
    }
  ]

  const studentData = [
    {
      month: "Jan",
      students: 100
    },
    {
      month: "Feb",
      students: 150
    },
    {
      month: "Mar",
      students: 200
    }
  ];

  const departmentData = [
    {
      department: "CS",
      students: 200
    },
    {
      department: "IT",
      students: 150
    },
    {
      department: "IS",
      students: 100
    },
    {
      department: "AI",
      students: 80
    }
  ];

  const applications = [
    {
      name: "Ahmed",
      program: "Computer Science",
      status: "Pending"
    },
    {
      name: "Ali",
      program: "Information Technology",
      status: "Approved"
    }
  ];

  const columns = [
    "Name",
    "Program",
    "Status",
    "Actions"
  ];

  function handleView(application) {
    setSelectedApplication(application);
    setShowModal(true);
  }

  return <>

    <div className={styles.dashboard}>
      <h1>Dashboard</h1>

      <div className={styles.cards}>

        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            index={index}
          />
        ))}
      </div>


      <div className={styles.chart}>
        <ChartCard title="Students Growth">
          <Charts data={studentData} />
        </ChartCard>

        <ChartCard title="Students By Department">
          <BarCharts data={departmentData} />
        </ChartCard>
      </div>


      <Table
        columns={columns}
        data={applications}
        onView={handleView} />


      {showModal && (
        <Modal
          data={selectedApplication}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>

  </>
}
