import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Elders from './Elders';
import Deacons from './Deacons';
import MCLeaders from './McLeaders';
import DnagLeaders from './DnagLeaders';
import CommunityGroups from './CommunityGroups';
import MinistryStaff from "./MinistryStaff";
import ElderPage from "./ElderPage";
import DrewReasons from "./DrewReasons";
import ForrestCory from "./ForrestCory";
import JoshMiller from "./JoshMiller";
import JustinLeitch from "./JustinLeitch";
import AlanSherriff from "./AlanSherriff";
import JasonHackworth from "./JasonHackworth";
import RussGriffith from "./RussGriffith";

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/CenterChurchOrgChart" element={<Elders />} />
              <Route path="/elders/:elderName" element={<ElderPage />} />
              <Route path="/deacons" element={<Deacons />} />
            <Route path="/mc-leaders" element={<MCLeaders />} />
            <Route path="/dnag-leaders" element={<DnagLeaders />} />
            <Route path="/community-groups" element={<CommunityGroups />} />
              <Route path="/ministry-staff" element={<MinistryStaff />} />
              <Route path="/elders/forrest" element={<ForrestCory />} />
              <Route path="/elders/josh" element={<JoshMiller />} />
              <Route path="/elders/justin" element={<JustinLeitch />} />
              <Route path="/elders/russ" element={<RussGriffith />} />
              <Route path="/elders/alan" element={<AlanSherriff />} />
              <Route path="/elders/jason" element={<JasonHackworth />} />
              <Route path="/elders/drew" element={<DrewReasons />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
