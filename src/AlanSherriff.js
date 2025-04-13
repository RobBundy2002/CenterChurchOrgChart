import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderAlan } from './orgData';
import alanSherriff from './Images/Alan.png';

const AlanSherriff = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Alan Sherriff</h2>
            <p>Lay Elder</p>
            <img
                src={alanSherriff}
                alt="Alan Sherriff"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderAlan} />
            </div>
        </div>
    );
};

export default AlanSherriff;
