import React, { useState } from "react";
import { TBody } from "../../dataDummy/classes";
import { TBody as TBodyTeacher } from "../../dataDummy/teachers";

const EditCourseForm = ({ course, onSave, onCancel }) => {
  const [name, setName] = useState(course?.name);
  const [teacherId, setTeacherId] = useState(course?.teacher_id);
  const [classes, setClasses] = useState(course?.classes);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourse = {
      ...course,
      name,
      teacher_id: course,
      classes,
    };
    onSave(updatedCourse);
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editcourseModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="editStudentModalLabel">
              Edit Course
            </h5>
            <button
              type="button"
              className="close"
              onClick={onCancel}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="teachers">Teachers</label>
                <input
                  type="text"
                  className="form-control"
                  id="teachers"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  required
                />

                <select
                  className="form-control"
                  id="classess"
                  value={course}
                  onChange={(e) => setClasses(e.target.value)}
                  required
                >
                  <option value="">Select Course</option>
                  {TBodyTeacher.map((data, i) => (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="classes">Classes</label>
                <select
                  className="form-control"
                  id="classess"
                  value={course}
                  onChange={(e) => setClasses(e.target.value)}
                  required
                >
                  <option value="">Select Course</option>
                  {TBody.map((data, i) => (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourseForm;
