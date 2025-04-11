import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderForrest } from './orgData';
import forrestCory from './Forrest.png';

const ForrestCory = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Forrest Cory</h2>
            <p>Lay Elder</p>
            <img
                src={forrestCory}
                alt="Forrest Cory"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
                <div className="horizontal-line" />
                <div className="branch-lines">
                    {mcLeadersUnderForrest.map((_, index) => (
                        <div key={index} className="branch-line" />
                    ))}
                </div>
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderForrest} />
            </div>
        </div>
    );
};

export default ForrestCory;
