import Table from "../../components/Table/Table";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";



export default function Applications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const [applications, setApplications] = useState([
    {
      name: "Ahmed",
      program: "Computer Science",
      status: "Pending"
    },
    {
      name: "Ali",
      program: "Information Technology",
      status: "Approved"
    },
    {
      name: "Mohamed",
      program: "Information Systems",
      status: "Rejected"
    }
  ]);

  const columns = [
    "Name",
    "Program",
    "Status",
    "Actions"
  ];

  function handleApprove(application) {
    setApplications(
      applications.map((item) => {
        if (item.name === application.name) {
          return {
            ...item,
            status: "Approved"
          }
        }
        return item;
      })
    );
  }

  function handleReject(application) {
    setApplications(
      applications.map((item) => {
        if (item.name === application.name) {
          return {
            ...item,
            status: "Rejected"
          }
        }
        return item;
      })
    );
  }


  function handleView(application) {
    setSelectedApplication(application);
    setShowModal(true);
  }
  return (
    <div>
      <h1>Applications</h1>

      <Table
        columns={columns}
        data={applications}
        onView={handleView}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      {showModal && (
        <Modal
          data={selectedApplication}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
