import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderDrew } from './orgData';
import drewReasons from './Drew.png';

const DrewReasons = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Drew Reasons</h2>
            <p>Lay Elder</p>
            <img
                src={drewReasons}
                alt="Drew Reasons"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
                <div className="horizontal-line" />
                <div className="branch-lines">
                    {mcLeadersUnderDrew.map((_, index) => (
                        <div key={index} className="branch-line" />
                    ))}
                </div>
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderDrew} />
            </div>
        </div>
    );
};

export default DrewReasons;
