import React from "react";
import { useLocation } from "react-router-dom";


const pembayaranData = [
  { id: 1, name: "SPP Bulan Januari", amount: 500000, status: "Lunas", date: "2024-01-10" },
  { id: 2, name: "SPP Bulan Februari", amount: 500000, status: "Belum Lunas", date: "2024-02-10" },
  { id: 3, name: "Seragam Sekolah", amount: 750000, status: "Lunas", date: "2024-03-05" },
  { id: 4, name: "Buku Pelajaran", amount: 300000, status: "Belum Lunas", date: "2024-04-01" }
];




export default function DashboardStudents() {
    const location = useLocation();
    const user = location.state?.user; // Ambil user dari state

    if (!user) {
        return <h1>Data user tidak ditemukan!</h1>;
    }

    return (
      <div style={styles.container}>
          {/* Bagian Kiri - Data User */}
          <div style={styles.userInfo}>
              <p><strong>NIS:</strong> {user.nis}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>No telpon:</strong> {user.noTelpon}</p>
              <p><strong>Clases:</strong> {user.clases}</p>

              <div>
              <p><strong>Pembayaran:</strong></p>
              <ul style={styles.list}>
                  {pembayaranData.map(item => (
                      <li key={item.id} style={styles.listItem}>
                          <span>
                              <strong>{item.name}</strong> - Rp {item.amount.toLocaleString()} ({item.status})
                          </span>

                          {item.status != 'Lunas' && 
                          <button style={styles.button} onClick={() => alert("Pembayaran berhasil!")}>
                              Bayar
                          </button>
                          }
                      </li>
                  ))}
              </ul>
          </div>


          </div>

          {/* Bagian Kanan - Foto */}
          <div style={styles.photoContainer}>
              <h2>Photo</h2>
              <img 
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" // Bisa diganti dengan user.photo jika ada
                  alt="User Profile"
                  style={styles.photo}
              />
          </div>

          {/* Tombol Bayar */}
         
      </div>
  );
}

// CSS in JS Styles
const styles = {
  container: {
      display: "flex",
      flexDirection: "row", // Susun elemen secara horizontal
      alignItems: "center", // Pusatkan elemen secara vertikal
      justifyContent: "space-between", // Jarak antar elemen
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      maxWidth: "100%",
      margin: "auto",
      flexWrap: "wrap" // Jika layar kecil, elemen akan turun ke bawah
  },
  userInfo: {
      flex: 1,
      textAlign: "left"
  },
  photoContainer: {
      flex: 1,
      textAlign: "center"
  },
  photo: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "2px solid #333"
  },
  buttonContainer: {
      width: "100%", // Agar tombol ada di bawah
      textAlign: "center",
      marginTop: "20px"
  },
  button: {
      marginLeft: "10px",
      padding: "5px 20px",
      fontSize: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
  }
};
