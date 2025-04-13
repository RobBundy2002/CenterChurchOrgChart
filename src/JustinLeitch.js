import React from 'react';
import justinLeitch from './Images/Justin.png';

const JustinLeitch = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Justin Leitch</h2>
            <p>Staff Elder</p>
            <img
                src={justinLeitch}
                alt="Justin Leitch"
                style={{ width: '150px', borderRadius: '50%' }}
            />
            <div className="connector-container">
                <div className="vertical-line" />
            </div>
            <div className="leader-cards">
            </div>
        </div>
    );
};

export default JustinLeitch;
