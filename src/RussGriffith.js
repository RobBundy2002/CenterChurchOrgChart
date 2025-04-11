import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderRuss } from './orgData';
import russGriffith from './Russ.png';

const RussGriffith = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Russ Griffith</h2>
            <p>Lay Elder</p>
            <img
                src={russGriffith}
                alt="Russ Griffith"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
                <div className="horizontal-line" />
                <div className="branch-lines">
                    {mcLeadersUnderRuss.map((_, index) => (
                        <div key={index} className="branch-line" />
                    ))}
                </div>
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderRuss} />
            </div>
        </div>
    );
};

export default RussGriffith;
