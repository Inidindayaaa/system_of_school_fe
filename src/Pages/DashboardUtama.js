import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarStudents from "../Components/NavbarStudents"; // Navbar
import "../styles/DashboardUtama.css"; // Import CSS

export default function DashboardUtama() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || { id: null, name: "Guest" };

  const handleProfile = () => {
    if (!user.id) {
      alert("User data not found!");
      return;
    }
    navigate(`/dashboard/profile/students/${user.id}`, { state: { user } });
  };

  return (
    <div>
      {/* Navbar */}
      <NavbarStudents user={user} />

      <div className="container mt-4">
        <h2 className="text-center">Selamat Datang, {user.name}!</h2>

        {/* Grid Card */}
        <div className="row mt-4">
          {cardData.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Data untuk card
const cardData = [
  {
    img: "https://source.unsplash.com/300x200/?library,books",
    title: "Perpustakaan",
    text: "Ribuan buku tersedia untuk menunjang pembelajaran.",
  },
  {
    img: "https://source.unsplash.com/300x200/?students,classroom",
    title: "Kelas Interaktif",
    text: "Belajar dengan metode modern berbasis teknologi.",
  },
  {
    img: "https://source.unsplash.com/300x200/?sports,soccer",
    title: "Ekstrakurikuler",
    text: "Gabung dalam berbagai kegiatan ekstrakurikuler!",
  },
  {
    img: "https://source.unsplash.com/300x200/?computer,technology",
    title: "Lab Komputer",
    text: "Fasilitas komputer untuk mendukung pembelajaran.",
  },
  {
    img: "https://source.unsplash.com/300x200/?science,laboratory",
    title: "Lab Sains",
    text: "Eksperimen dengan peralatan lengkap di Lab Sains.",
  },
  {
    img: "https://source.unsplash.com/300x200/?cafeteria,food",
    title: "Kantin Sehat",
    text: "Makanan sehat dan bergizi tersedia di kantin sekolah.",
  },
  {
    img: "https://source.unsplash.com/300x200/?art,music",
    title: "Seni & Musik",
    text: "Kembangkan bakat seni dan musikmu di sekolah.",
  },
  {
    img: "https://source.unsplash.com/300x200/?medic,clinic",
    title: "Klinik Sekolah",
    text: "Fasilitas kesehatan untuk siswa dan guru.",
  },
];

// Komponen Card
const Card = ({ img, title, text }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
