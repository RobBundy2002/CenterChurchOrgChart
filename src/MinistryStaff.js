import React from 'react';
import OrgChart from './OrgChart';
import { ministryStaff, residents } from './orgData';

function MinistryStaff() {
    return (
        <>
            <OrgChart title="Ministry Staff" members={ministryStaff} />
            <OrgChart title="Residents" members={residents} />
        </>
    );
}

export default MinistryStaff;
