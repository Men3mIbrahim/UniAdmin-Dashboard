import { useState } from "react";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import styles from "./Courses.module.css";
import { motion } from "framer-motion";

export default function Courses() {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [instructorFilter, setInstructorFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2;
  const [sort, setSort] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null)
  const [newCourse, setNewCourse] = useState({
    code: "",
    name: "",
    instructor: "",
    credits: ""
  });
  const [loading] = useState(false);



  const columns = [
    "Code",
    "Course",
    "Instructor",
    "Credits",
    "Actions"
  ];


  const [courses, setCourses] = useState([
    {
      code: "CS101",
      name: "Data Structures",
      instructor: "Dr. Ahmed",
      credits: 3
    },
    {
      code: "IT202",
      name: "Networks",
      instructor: "Dr. Ali",
      credits: 4
    },
    {
      code: "AI301",
      name: "Machine Learning",
      instructor: "Dr. Mohamed",
      credits: 3
    }
  ]);

  const filteredCourses = courses.filter((course) => {

    const matchesSearch = course.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesInstructor =
      instructorFilter === "All" ||
      course.instructor === instructorFilter;

    return matchesSearch && matchesInstructor;
  });


  let sortedCourses = [...filteredCourses];

  if (sort === "credits-asc") {
    sortedCourses.sort((a, b) => a.credits - b.credits);
  }

  if (sort === "credits-desc") {
    sortedCourses.sort((a, b) => b.credits - a.credits);
  }

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  const currentCourses = sortedCourses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);




  function handleView(course) {
    setSelectedCourse(course);
    setShowModal(true);
  }

  function handleEdit(course) {
    setEditCourse(course)
    setNewCourse(course)
    setShowForm(true)
  }

  function handleDelete(course) {
    const updatedCourses = courses.filter((item) => {
      return item.code !== course.code;
    });
    setCourses(updatedCourses);
  }


  function handleSaveCourse() {

    if (editCourse) {

      const updatedCourses = courses.map((course) => {

        if (course.code === editCourse.code) {
          return newCourse;
        }

        return course;
      });

      setCourses(updatedCourses);

    } else {

      setCourses([
        ...courses,
        newCourse
      ]);

    }

    setShowForm(false);
    setEditCourse(null);

  }

  function handleChange(e) {

    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    });

  }


  return (
    <>

      <div className=" d-flex align-items-center justify-content-between">
        <input
          className={styles.search}
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="btn btn-outline-dark px-3" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option className="btn btn-light" value="">Sort by</option>
          <option className="btn btn-light" value="credits-asc">Credits: Low to High</option>
          <option className="btn btn-light" value="credits-desc">Credits: High to Low</option>
        </select>


        <select
          className="btn  btn-outline-dark"
          value={instructorFilter}
          onChange={(e) => setInstructorFilter(e.target.value)}
        >
          <option className="btn btn-light" value="All">All Instructors</option>
          <option className="btn btn-light" value="Dr. Ahmed">Dr. Ahmed</option>
          <option className="btn btn-light" value="Dr. Ali">Dr. Ali</option>
          <option className="btn btn-light" value="Dr. Mohamed">Dr. Mohamed</option>
        </select>
      </div>

      {loading ? (
        <motion.div
          className={styles.loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.spinner}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <p>Loading courses...</p>
        </motion.div>
      ) : currentCourses.length > 0 ? (
        <Table
          columns={columns}
          data={currentCourses}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <motion.div
          className={styles.empty}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3>No Courses Found</h3>
          <p>Try changing your search or filter.</p>
        </motion.div>
      )}

      <div className={styles.pagination}>

        <button
          className={styles.pageBtn}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.pageBtn} ${currentPage === index + 1 ? styles.active : ""
              }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={styles.pageBtn}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>


      {showModal && (
        <Modal
          data={selectedCourse}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-2">
            <button className="btn btn-success mt-3" onClick={() => setShowForm(true)}>
              Add Course
            </button>
          </div>

          <div className="col-md-10">
            {showForm && (
              <div className=" mt-3 d-flex align-items-center justify-content-center" >



                <input
                  className=" me-2"
                  name="code"
                  value={newCourse.code}
                  onChange={handleChange}
                  placeholder="Code"
                />

                <input
                  className=" me-2"
                  name="name"
                  value={newCourse.name}
                  onChange={handleChange}
                  placeholder="Course Name"
                />

                <input
                  className=" me-2"
                  name="instructor"
                  value={newCourse.instructor}
                  onChange={handleChange}
                  placeholder="Instructor"
                />

                <input
                  className=" me-2"
                  name="credits"
                  value={newCourse.credits}
                  onChange={handleChange}
                  placeholder="Credits"
                />


                <button className=" me-2 btn btn-success" onClick={handleSaveCourse}>
                  {editCourse ? "Update" : "Save"}
                </button>


                <button className=" btn btn-danger" onClick={() => setShowForm(false)}>
                  Cancel
                </button>

              </div>
            )}
          </div>
        </div>
      </div>








    </>
  );

}