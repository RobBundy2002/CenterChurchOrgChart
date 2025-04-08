import React from 'react';
import OrgChart from './OrgChart';
import { mcLeaders } from './orgData';

function MCLeaders() {
    return <OrgChart title="MC Leaders" members={mcLeaders} />;
}

export default MCLeaders;
