import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderJason } from './orgData';
import jasonHackworth from './Jason.png';

const JasonHackworth = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Jason Hackworth</h2>
            <p>Lay Elder</p>
            <img
                src={jasonHackworth}
                alt="Jason Hackworth"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
                <div className="horizontal-line" />
                <div className="branch-lines">
                    {mcLeadersUnderJason.map((_, index) => (
                        <div key={index} className="branch-line" />
                    ))}
                </div>
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderJason} />
            </div>
        </div>
    );
};

export default JasonHackworth;
