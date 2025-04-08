import React from 'react';
import './OrgChart.css'; // Reuse existing styles

const OrgChart = ({ title, members }) => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">{title}</h2>
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
        </div>
    );
};

export default OrgChart;
