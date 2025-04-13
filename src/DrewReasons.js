import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderDrew } from './orgData';
import drewReasons from './Images/Drew.png';

const DrewReasons = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Drew Reasons</h2>
            <p>Lay Elder</p>
            <img
                src={drewReasons}
                alt="Drew Reasons"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderDrew} />
            </div>
        </div>
    );
};

export default DrewReasons;
