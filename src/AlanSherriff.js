import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderAlan } from './orgData';
import alanSherriff from './Alan.png';

const AlanSherriff = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Alan Sherriff</h2>
            <p>Lay Elder</p>
            <img
                src={alanSherriff}
                alt="Alan Sherriff"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
                <div className="horizontal-line" />
                <div className="branch-lines">
                    {mcLeadersUnderAlan.map((_, index) => (
                        <div key={index} className="branch-line" />
                    ))}
                </div>
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderAlan} />
            </div>
        </div>
    );
};

export default AlanSherriff;
