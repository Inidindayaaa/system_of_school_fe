import React from "react";
import {
  Dashboard,
  Students,
  Login,
  Course,
  Teachers,
  Home,
  // Ekstrakurikuler,
  // AboutUs,
  Announcements,
  Attendances,
  Parents,
  Exams,
  LoginStudents,
  DashboardStudents,
  DashboardUtama,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
// import AboutUs from "./Pages/AboutUs";

export default function Routers() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/students" element={<Students />} />

        <Route path="/course" element={<Course />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/home" element={<Home />} />

        {/* <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} /> */}

        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}

        <Route path="/attendances" element={<Attendances />} />

        <Route path="/parents" element={<Parents />} />

        <Route path="/exams" element={<Exams />} />

        <Route path="/dashboard/students/:id" element={<DashboardUtama />} />

        <Route path="/profile/students/:id" element={<DashboardStudents />} />

        <Route path="/login/students" element={<LoginStudents />} />

        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </div>
  );
}
