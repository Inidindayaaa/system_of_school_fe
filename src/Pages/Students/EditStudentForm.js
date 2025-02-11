import React, { useState } from 'react';

const EditStudentForm = ({ student, onSave, onCancel }) => {
  const [name, setName] = useState(student?.name);
  const [address, setAddress] = useState(student?.address);
  const [birthdate, setBirthdate] = useState(student?.birthdate);
  const [gender, setGender] = useState(student?.gender);
  const [phone, setPhone] = useState(student?.phone);
  const [grades, setGrades] = useState(student?.grades);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = {
      ...student,
      name,
      address,
      birthdate,
      gender,
      phone,
      grades,
      classes
    };
    onSave(updatedStudent);
  };

  return (
    <div
      className='modal fade show'
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='editStudentModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header d-flex justify-content-between'>
            <h5 className='modal-title' id='editStudentModalLabel'>
              Edit Student
            </h5>
            <button
              type='button'
              className='close'
              onClick={onCancel}
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='birthdate'>Birthdate</label>
                <input
                  type='date'
                  className='form-control'
                  id='birthdate'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <select
                  className='form-control'
                  id='gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  className='form-control'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary'>
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

export default EditStudentForm;
