import React from 'react';
import {
  Dashboard,
  Students,
  Login,
  Course,
  Teachers,
  Classes,
  Grades,
  Schedules,
  Announcements,
  Attendances,
  Parents,
  Exams,
  LoginStudents,
  DashboardStudents
} from './Pages';
import { Route, Routes } from 'react-router-dom';

export default function Routers() {
  return (
    <div className='pages'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/students' element={<Students />} />

        <Route path='/course' element={<Course />} />

        <Route path='/teachers' element={<Teachers />} />

        <Route path='/classes' element={<Classes />} />

        <Route path='/grades' element={<Grades />} />

        <Route path='/schedules' element={<Schedules />} />

        <Route path='/attendances' element={<Attendances />} />

        <Route path='/parents' element={<Parents />} />

        <Route path='/exams' element={<Exams />} />

        <Route path='/dashboard/students/:id' element={<DashboardStudents />} />

        <Route path='/login/students' element={<LoginStudents />} />

        <Route path='/announcements' element={<Announcements />} />
      </Routes>
    </div>
  );
}
