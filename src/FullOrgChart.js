import React from 'react';
import Mermaid from './Images/Mermaid.png';

function FullOrgChart() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            textAlign: 'center'
        }}>
            <div className="leaders-title">
                <h2>Full Org Chart</h2>
            </div>
            <img
                src={Mermaid}
                alt="Org Chart"
                style={{ maxWidth: '98%', maxHeight: '100%' }}
            />
        </div>
    );
}

export default FullOrgChart;
