import React from 'react';
import './LeaderCards.css';

const LeaderCards = ({ members }) => {
    return (
        <div className="leaders-list">
            {members.map((person, index) => (
                <div className="leader-card" key={index}>
                    <div className="leader-content">
                        <img
                            className="leader-image"
                            src={person.photo}
                            alt={person.name}
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">{person.name}</h3>
                            <p className="leader-role">{person.role}</p>
                            {person.description && (
                                <p className="leader-description">{person.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeaderCards;
