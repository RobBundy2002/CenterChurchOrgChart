import React from 'react';
import OrgChart from './OrgChart';
import { dnagLeaders } from './orgData';

function DnagLeaders() {
    return <OrgChart title="Dnag Leaders" members={dnagLeaders} />;
}

export default DnagLeaders;
