import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderRuss } from './orgData';
import russGriffith from './Images/Russ.png';

const RussGriffith = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Russ Griffith</h2>
            <p>Lay Elder</p>
            <img
                src={russGriffith}
                alt="Russ Griffith"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderRuss} />
            </div>
        </div>
    );
};

export default RussGriffith;
