import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/SideNavbar";
import TableComponents from "../../Components/TableComponents";
import { THead, TBody } from "../../dataDummy/course"; // Asumsi data dalam format JSON
import EditCourseForm from "./EditCourseForm"; // Import form di sini
import "../../styles/Course.css";
export default function Course() {
  const [TBodyCourse, setTBodyCourse] = useState(TBody); // Inisialisasi state dengan TBody
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Jika ada data yang perlu diambil dari API, bisa ditambahkan di sini
  }, []);

  const handleEdit = (updatedTeacher) => {
    setTBodyCourse((prevTeacher) =>
      prevTeacher.map((teacher) =>
        teacher.id === updatedTeacher.id ? updatedTeacher : teacher
      )
    );
    setShowModalEdit(false); // Tutup modal setelah edit
  };

  const handleDelete = (id) => {
    setTBodyCourse((prevTeacher) =>
      prevTeacher.filter((teacher) => teacher.id !== id)
    );
  };

  const handleAdd = (dataTeacher) => {
    setTBodyCourse((prevTeacher) => [
      ...prevTeacher,
      { ...dataTeacher, id: prevTeacher.length + 1 }, // Auto-increment ID
    ]);
    setShowModalAdd(false); // Tutup modal setelah menambah
  };

  // return (
  //   <div className="row">
  //     <SideNavbar />
  //     <div className="col-10 pt-5">
  //       <h2 className="text-center">Course</h2>
  //       <div className="dashboard-content">
  //         <TableComponents
  //           thead={THead}
  //           tbody={TBodyCourse}
  //           buttonName={"Add New Course"}
  //           handleDelete={handleDelete}
  //           handleAdd={handleAdd}
  //           handleEdit={(course) => {
  //             setSelectedCourse(course);
  //             setShowModalEdit(true);
  //           }}
  //           openAddModal={() => setShowModalAdd(true)}
  //         />

  //         {/* Modal Form Edit */}
  //         {showModalEdit && selectedCourse && (
  //           <EditCourseForm
  //             course={selectedCourse}
  //             onSave={handleEdit}
  //             onCancel={() => setShowModalEdit(false)}
  //           />
  //         )}

  //         {/* Modal Form Add */}
  //         {showModalAdd && (
  //           <EditCourseForm
  //             onSave={handleAdd}
  //             onCancel={() => setShowModalAdd(false)}
  //           />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="course-container">
      <SideNavbar />
      <div className="course-content">
        <div className="course-wrapper">
          <h2>Course</h2>
          <TableComponents
            thead={THead}
            tbody={TBodyCourse}
            buttonName={"Add New Course"}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            handleEdit={(course) => {
              setSelectedCourse(course);
              setShowModalEdit(true);
            }}
            openAddModal={() => setShowModalAdd(true)}
          />

          {/* Modal Form Edit */}
          {showModalEdit && selectedCourse && (
            <EditCourseForm
              course={selectedCourse}
              onSave={handleEdit}
              onCancel={() => setShowModalEdit(false)}
            />
          )}

          {/* Modal Form Add */}
          {showModalAdd && (
            <EditCourseForm
              onSave={handleAdd}
              onCancel={() => setShowModalAdd(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
