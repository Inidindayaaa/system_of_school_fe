import React, { useEffect, useState } from "react";
import SideNavbar from "../../Components/SideNavbar";
import TableComponents from "../../Components/TableComponents";
import { THead, TBody } from "../../dataDummy/teachers"; // Asumsi data dalam format JSON
import EditTeacherForm from "./EditTeacherForm"; // Import form di sini
import "../../styles/Teachers.css";

export default function Teacher() {
  const [TBodyTeachers, setTBodyTeachers] = useState(TBody); // Inisialisasi state dengan TBody
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [selectedTeachers, setSelectedTeachers] = useState(null);

  useEffect(() => {
    // Jika ada data yang perlu diambil dari API, bisa ditambahkan di sini
  }, []);

  const handleEdit = (updatedTeacher) => {
    setTBodyTeachers((prevTeacher) =>
      prevTeacher.map((teacher) =>
        teacher.id === updatedTeacher.id ? updatedTeacher : teacher
      )
    );
    setShowModalEdit(false); // Tutup modal setelah edit
  };

  const handleDelete = (id) => {
    setTBodyTeachers((prevTeacher) =>
      prevTeacher.filter((teacher) => teacher.id !== id)
    );
  };

  const handleAdd = (dataTeacher) => {
    setTBodyTeachers((prevTeacher) => [
      ...prevTeacher,
      { ...dataTeacher, id: prevTeacher.length + 1 }, // Auto-increment ID
    ]);
    setShowModalAdd(false); // Tutup modal setelah menambah
  };

  // return (
  //   <div className='row'>
  //     <SideNavbar />
  //     <div className='col-10 pt-5'>
  //       <h2 className='text-center'>Teachers</h2>
  //       <div className='dashboard-content'>
  //         <TableComponents
  //           thead={THead}
  //           tbody={TBodyTeachers}
  //           buttonName={'Add New Teacher'}
  //           handleDelete={handleDelete}
  //           handleAdd={handleAdd}
  //           handleEdit={(teacher) => {
  //             setSelectedTeachers(teacher);
  //             setShowModalEdit(true);
  //           }}
  //           openAddModal={() => setShowModalAdd(true)}
  //         />

  //         {/* Modal Form Edit */}
  //         {showModalEdit && selectedTeachers && (
  //           <EditTeacherForm
  //             teacher={selectedTeachers}
  //             onSave={handleEdit}
  //             onCancel={() => setShowModalEdit(false)}
  //           />
  //         )}

  //         {/* Modal Form Add */}
  //         {showModalAdd && (
  //           <EditTeacherForm
  //             onSave={handleAdd}
  //             onCancel={() => setShowModalAdd(false)}
  //           />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="teacher-container">
      <SideNavbar />
      <div className="teacher-content">
        <div className="teacher-wrapper">
          <h2>Teachers</h2>
          <TableComponents
            thead={THead}
            tbody={TBodyTeachers}
            buttonName={"Add New Teacher"}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            handleEdit={(teacher) => {
              setSelectedTeachers(teacher);
              setShowModalEdit(true);
            }}
            openAddModal={() => setShowModalAdd(true)}
          />

          {/* Modal Form Edit */}
          {showModalEdit && selectedTeachers && (
            <EditTeacherForm
              teacher={selectedTeachers}
              onSave={handleEdit}
              onCancel={() => setShowModalEdit(false)}
            />
          )}

          {/* Modal Form Add */}
          {showModalAdd && (
            <EditTeacherForm
              onSave={handleAdd}
              onCancel={() => setShowModalAdd(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
