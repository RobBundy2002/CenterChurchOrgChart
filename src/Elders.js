import React from 'react';
import { useNavigate } from 'react-router-dom';
import { elders } from './orgData';
import './StyleSheets/OrgChart.css';

function Elders() {
    const navigate = useNavigate();

    const handleNavigation = (elder) => {
        const elderLink = `/elders/${elder.name.split(' ')[0].toLowerCase()}`;
        navigate(elderLink);
    };

    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Elder Team</h2>
            <div className="leaders-list">
                {elders.map((elder) => (
                    <button
                        key={elder.name}
                        className="leader-card"
                        onClick={() => handleNavigation(elder)}
                    >
                        <img
                            className="leader-image"
                            src={elder.photo}
                            alt={elder.name}
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">{elder.name}</h3>
                            <p className="leader-role">{elder.role}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Elders;
