import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function StudentId() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = location.state?.user?.data;

  const [userData, setUserData] = useState({
    id: user?.id || "",
    nis: user?.nis || "",
    name: user?.name || "",
    birthdate: user?.birthdate || "",
    address: user?.address || "",
    gender: user?.gender || "",
    class_id: user?.class_id || "",
    phone: user?.phone || "",
    grade: user?.grade || "",
    userName: user?.userName || "",
    status: user?.pembayaran[0].status || "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Detail Siswa</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>ID:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.id}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>NIS:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.nis}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>Nama:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.name}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Tanggal Lahir:
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.birthdate}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>Alamat:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.address}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Jenis Kelamin:
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.gender}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>Kelas:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.class_id}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>No. HP:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.phone}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>Nilai:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.grade}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>Username:</td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.userName}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              Status Pembayaran:
            </td>
            <td style={{ border: "1px solid #ddd", padding: 10 }}>
              {userData.status}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleBack}
        style={{
          padding: 10,
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Kembali
      </button>
    </div>
  );
}
