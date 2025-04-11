import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import `useNavigate`
import { elders } from './orgData';

function Elders() {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <div style={{ padding: '2rem 1rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Elder Team</h2>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                }}
            >
                {elders.map((elder) => {
                    const elderLink = `/elders/${elder.name.split(' ')[0].toLowerCase()}`;
                    return (
                        <button
                            key={elder.name}
                            className="leader-button"  // You can add your own class for styles
                            onClick={() => handleNavigation(elderLink)} // Use handleNavigation for routing
                            style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                className="leader-image"
                                src={elder.photo}
                                alt={elder.name}
                                style={{ width: '150px', borderRadius: '100%' }}
                            />
                            <div className="leader-info">
                                <h3 className="leader-name">{elder.name}</h3>
                                <p className="leader-role">{elder.role}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Elders;
