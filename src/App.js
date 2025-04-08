import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Elders from './Elders';
import Deacons from './Deacons';
import MCLeaders from './McLeaders';
import DnagLeaders from './DnagLeaders';
import CommunityGroups from './CommunityGroups';
import MinistryStaff from "./MinistryStaff";
import './index.css';

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Elders />} />
            <Route path="/deacons" element={<Deacons />} />
            <Route path="/mc-leaders" element={<MCLeaders />} />
            <Route path="/dnag-leaders" element={<DnagLeaders />} />
            <Route path="/community-groups" element={<CommunityGroups />} />
              <Route path="/ministry-staff" element={<MinistryStaff />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
