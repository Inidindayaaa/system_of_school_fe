import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/SideNavbar";
import TableComponents from "../../Components/TableComponents";
import { THead, TBody } from "../../dataDummy/students"; // Asumsi data dalam format JSON
import EditStudentForm from "./EditStudentForm"; // Import form di sini
import "../../styles/Students.css";
export default function Students() {
  const [TBodyStudents, setTBodyStudents] = useState(TBody); // Inisialisasi state dengan TBody
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Jika ada data yang perlu diambil dari API, bisa ditambahkan di sini
  }, []);

  const handleEdit = (updatedStudent) => {
    setTBodyStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setShowModalEdit(false); // Tutup modal setelah edit
  };

  const handleDelete = (id) => {
    setTBodyStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const handleAdd = (dataStudent) => {
    setTBodyStudents((prevStudents) => [
      ...prevStudents,
      { ...dataStudent, id: prevStudents.length + 1 }, // Auto-increment ID
    ]);
    setShowModalAdd(false); // Tutup modal setelah menambah
  };

  // return (
  //   <div className='row'>
  //     <SideNavbar />
  //     <div className='col-10 pt-5'>
  //       <h2 className='text-center'>Students</h2>
  //       <div className='dashboard-content'>
  //         <TableComponents
  //           thead={THead}
  //           tbody={TBodyStudents}
  //           buttonName={'Add New Student'}
  //           handleDelete={handleDelete}
  //           handleAdd={handleAdd}
  //           handleEdit={(student) => {
  //             setSelectedStudent(student);
  //             setShowModalEdit(true);
  //           }}
  //           openAddModal={() => setShowModalAdd(true)}
  //         />

  //         {/* Modal Form Edit */}
  //         {showModalEdit && selectedStudent && (
  //           <EditStudentForm
  //             student={selectedStudent}
  //             onSave={handleEdit}
  //             onCancel={() => setShowModalEdit(false)}
  //           />
  //         )}

  //         {/* Modal Form Add */}
  //         {showModalAdd && (
  //           <EditStudentForm
  //             onSave={handleAdd}
  //             onCancel={() => setShowModalAdd(false)}
  //           />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="students-container">
      <SideNavbar />
      <div className="students-content">
        <div className="students-wrapper">
          <h2>Students</h2>
          <TableComponents
            thead={THead}
            tbody={TBodyStudents}
            buttonName={"Add New Student"}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            handleEdit={(student) => {
              setSelectedStudent(student);
              setShowModalEdit(true);
            }}
            openAddModal={() => setShowModalAdd(true)}
          />

          {/* Modal Form Edit */}
          {showModalEdit && selectedStudent && (
            <EditStudentForm
              student={selectedStudent}
              onSave={handleEdit}
              onCancel={() => setShowModalEdit(false)}
            />
          )}

          {/* Modal Form Add */}
          {showModalAdd && (
            <EditStudentForm
              onSave={handleAdd}
              onCancel={() => setShowModalAdd(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
