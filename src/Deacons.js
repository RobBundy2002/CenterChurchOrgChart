import React from 'react';
import OrgChart from './OrgChart';
import { deacons } from './orgData';

function Deacons() {
    return <OrgChart title="Deacons" members={deacons} />;
}

export default Deacons;
