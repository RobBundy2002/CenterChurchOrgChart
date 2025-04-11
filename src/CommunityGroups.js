import React from 'react';
import OrgChart from './OrgChart';
import { communityGroups } from './orgData';

function CommunityGroups() {
    return <OrgChart title="Community Group Leaders" members={communityGroups} />;
}

export default CommunityGroups;
