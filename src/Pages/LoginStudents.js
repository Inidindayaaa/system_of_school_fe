import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TBody } from "../dataDummy/students";
import "../styles/LoginStudents.css";
export default function LoginStudents() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah username dan password diisi
    if (!formData.usernameOrEmail || !formData.password) {
      alert("Login gagal: Harap isi username/email dan password.");
      return;
    }

    // Cek apakah username dan password cocok dengan data di TBody
    const user = TBody.find(
      (el) =>
        el.userName === formData.usernameOrEmail &&
        el.password === formData.password
    );

    if (user) {
      alert("Login berhasil");
      navigate(`/dashboard/students/${user.id}`, { state: { user } }); // Redirect ke dashboard jika login sukses
    } else {
      alert("Login gagal: Username atau password salah.");
    }
  };

  // return (
  //   <div className='container '>
  //     <div className='row justify-content-center'>
  //       <div className='col-md-6'>
  //         <h2 className='text-center my-4' >Login Students</h2>
  //         <form onSubmit={handleSubmit}>
  //           {/* Input untuk Username atau Email */}
  //           <div className='mb-3'>
  //             <label htmlFor='usernameOrEmail' className='form-label'>
  //               Username atau Email
  //             </label>
  //             <input
  //               type='text'
  //               className='form-control'
  //               id='usernameOrEmail'
  //               name='usernameOrEmail'
  //               value={formData.usernameOrEmail}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>

  //           {/* Input untuk Password */}
  //           <div className='mb-3'>
  //             <label htmlFor='password' className='form-label'>
  //               Password
  //             </label>
  //             <input
  //               type='password'
  //               className='form-control'
  //               id='password'
  //               name='password'
  //               value={formData.password}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>

  //           {/* Tombol Submit */}
  //           <div className='d-grid gap-2'>
  //             <button type='submit' className='btn btn-primary'>
  //               Login
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Login Students</h2>
        <form onSubmit={handleSubmit}>
          {/* Input untuk Username atau Email */}
          <div className="mb-3">
            <label htmlFor="usernameOrEmail" className="form-label">
              Username atau Email
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameOrEmail"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Input untuk Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Tombol Submit */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
