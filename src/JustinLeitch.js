import React from 'react';
import LeaderCards from './LeaderCards';
import justinLeitch from './Justin.png';

const JustinLeitch = () => {
    const members = [];

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Justin Leitch</h2>
            <p>Lay Elder</p>
            <img
                src={justinLeitch}
                alt="Justin Leitch"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>

            <div className="leader-cards">
                <LeaderCards members={members} />
            </div>
        </div>
    );
};

export default JustinLeitch;
