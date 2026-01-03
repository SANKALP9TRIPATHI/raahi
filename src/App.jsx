import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Civilian from './pages/Civilian';
import Admin from './pages/Admin';
import ReportPotholeUpload from './pages/ReportPotholeUpload';
import CivilianComplaintDetail from './pages/CivilianComplaintDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/civilian" element={<Civilian />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/report-pothole" element={<ReportPotholeUpload />} />
          <Route path="/back" element={<Civilian />} />
          <Route path="/complaints/:id" element={<CivilianComplaintDetail />} />
          <Route path="/backtocivilan" element={<Civilian />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

