import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import { TBody } from "../dataDummy/students";

export default function DashboardStudents() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState(TBody);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const foundStudent = students.find((s) => s.id === user?.id);
    setCurrentUser(foundStudent || null);
  }, [user, students]);

  if (!currentUser) {
    return <h1>Data user tidak ditemukan!</h1>;
  }

  const BayarWoy = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === currentUser.id
            ? {
                ...student,
                pembayaran: student.pembayaran.map((p) =>
                  p.id === id ? { ...p, status: "Lunas" } : p
                ),
              }
            : student
        )
      );
      setCurrentUser((prevUser) => ({
        ...prevUser,
        pembayaran: prevUser.pembayaran.map((p) =>
          p.id === id ? { ...p, status: "Lunas" } : p
        ),
      }));
      alert("Pembayaran berhasil!");
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.userInfo}>
        <p>
          <strong>NIS:</strong> {currentUser.nis}
        </p>
        <p>
          <strong>Name:</strong> {currentUser.name}
        </p>
        <p>
          <strong>Address:</strong> {currentUser.address}
        </p>
        <p>
          <strong>No Telpon:</strong> {currentUser.phone}
        </p>
        <p>
          <strong>Class:</strong> {currentUser.class_id}
        </p>

        <div>
          <p>
            <strong>Pembayaran:</strong>
          </p>
          <ul style={styles.list}>
            {currentUser.pembayaran.map((item) => (
              <li key={item.id} style={styles.listItem}>
                <span>
                  <strong>{item.name}</strong> - Rp{" "}
                  {item.amount.toLocaleString("id-ID")} ({item.status})
                </span>

                {item.status !== "Lunas" && (
                  <button
                    style={styles.button}
                    onClick={() => BayarWoy(item.id)}
                  >
                    {isLoading ? <Ellipsis size={20} color="#fff" /> : "Bayar"}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>

      <div style={styles.photoContainer}>
        <h2>Photo</h2>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="User Profile"
          style={styles.photo}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    maxWidth: "100%",
    margin: "auto",
    flexWrap: "wrap",
  },
  userInfo: {
    flex: 1,
    textAlign: "left",
  },
  photoContainer: {
    flex: 1,
    textAlign: "center",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "2px solid #333",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 20px",
    fontSize: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
