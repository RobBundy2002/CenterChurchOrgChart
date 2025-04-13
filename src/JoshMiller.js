import React from 'react';
import LeaderCards from './LeaderCards';
import { mcLeadersUnderJosh } from './orgData';
import joshMiller from './Images/Josh.png';

const JoshMiller = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Josh Miller</h2>
            <p>Staff Elder</p>
            <img
                src={joshMiller}
                alt="Josh Miller"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>
            <div className="leader-cards">
                <LeaderCards members={mcLeadersUnderJosh} />
            </div>
        </div>
    );
};

export default JoshMiller;
