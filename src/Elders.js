import React from 'react';
import OrgChart from './OrgChart'
import { elders } from './orgData';

function Elders() {
    return <OrgChart title="Elder Team" members={elders} />;
}

export default Elders;
