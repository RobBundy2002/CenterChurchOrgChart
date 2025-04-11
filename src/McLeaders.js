import {
    mcLeadersUnderJosh,
    mcLeadersUnderDrew,
    mcLeadersUnderJason,
    mcLeadersUnderForrest,
    mcLeadersUnderRuss,
    mcLeadersUnderAlan
} from './orgData';
import OrgChart from "./OrgChart";

function MCLeaders() {
    const allMCLeaders = [
        ...mcLeadersUnderJosh,
        ...mcLeadersUnderDrew,
        ...mcLeadersUnderJason,
        ...mcLeadersUnderForrest,
        ...mcLeadersUnderRuss,
        ...mcLeadersUnderAlan
    ];

    return <OrgChart title="MC Leaders" members={allMCLeaders} />;
}

export default MCLeaders;
