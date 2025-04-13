// Placeholder image you can replace with real local paths or URLs later

import joshMiller from './Images/Josh.png';
import justinLeitch from './Images/Justin.png';
import forrestCory from './Images/Forrest.png';
import russGriffith from './Images/Russ.png';
import alanSherriff from './Images/Alan.png';
import jasonHackworth from './Images/Jason.png';
import drewReasons from './Images/Drew.png';
import keatonDaniel from './Images/Keaton.png';

// import zachHannahEvans from './zachHannahEvans.png';
//
// import robBundy from './robBundy.png';
//
// import grantCostello from './grantCostello.png';
// import ethanFouch from './ethanFouch.png';

import rickJohnson from './Images/Rick.png';
import benSaunders from './Images/Ben.jpg';
import ashleyClubb from './Images/Ashley.png';
import jpSealy from './Images/JP.png';
import haleyMorgan from './Images/Haley.png';
import jessFlannery from './Images/Jess.png';
import sarahReasons from './Images/Sarah.png';
import jennaDaniel from './Images/Jenna.png';

import erinLogan from './Images/Erin.png';
import joseConcepcion from './Images/Jose.png';
import livDidat from './Images/Liv.png';
import mikeMatzeder from './Images/Mike.png';
import marlyRokenbrod from './Images/Marly.png';
import ginnySigalas from './Images/Ginny.png';
import ianSimmons from './Images/Ian.png';

const placeholder = 'https://via.placeholder.com/150';
export let elders = [
    { name: 'Josh Miller', role: 'Staff Elder', photo: joshMiller },
    { name: 'Justin Leitch', role: 'Staff Elder', photo: justinLeitch },
    { name: 'Forrest Cory', role: 'Lay Elder', photo: forrestCory },
    { name: 'Russ Griffith', role: 'Lay Elder', photo: russGriffith },
    { name: 'Alan Sherriff', role: 'Lay Elder', photo: alanSherriff },
    { name: 'Jason Hackworth', role: 'Lay Elder', photo: jasonHackworth },
    { name: 'Drew Reasons', role: 'Lay Elder', photo: drewReasons },
];

export const eldersWithLinks = elders.map(elder => ({
    ...elder,
    linkTo: `/elders/${elder.name.toLowerCase().replace(/\s+/g, '-')}`
}));

export const deacons = [
    { name: 'Keaton Daniel', role: 'Deacon', photo: keatonDaniel },
];

export const mcLeadersUnderForrest = [
    {
        name: 'The Evans',
        role: 'Housekey MC',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Shockleys',
        role: 'MC-64',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Flannerys',
        role: 'Ruckersville',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Lewises',
        role: 'Riverside',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Bigelows',
        role: 'Barracks',
        photo: placeholder,
        description: '',
    },
];

export const mcLeadersUnderDrew = [
    {
        name: 'The Durrers',
        role: 'Crozet',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Royce',
        role: 'YP Men',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Putrinos',
        role: 'Commonwealth',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Turnbulls',
        role: 'Ivy',
        photo: placeholder,
        description: '',
    },
];

export const mcLeadersUnderAlan = [
    {
        name: 'The Mins',
        role: 'Belmont',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The McGuires',
        role: 'Carrsbrook',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Rileys',
        role: 'Earlysville',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Sharpes',
        role: 'Rio East',
        photo: placeholder,
        description: '',
    },
];

export const mcLeadersUnderJason = [
    {
        name: 'The Kowalewskis',
        role: 'Pantops',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Cannadys',
        role: 'Rugby',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The DiGiorgios',
        role: 'Lake Monticello',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Ahns',
        role: 'Logos MC',
        photo: placeholder,
        description: '',
    },
];

export const mcLeadersUnderJosh = [
    {
        name: 'The Congers',
        role: 'Forrest Lakes',
        photo: placeholder,
        description: '',
    },
];

export const mcLeadersUnderRuss = [
    {
        name: 'The Gigantis',
        role: 'Fry Springs',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Morgans',
        role: 'Brookside',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Leitches',
        role: 'Rio',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Smiths',
        role: 'Fieldbrook',
        photo: placeholder,
        description: '',
    },
    {
        name: 'The Conceptions',
        role: 'Center College',
        photo: placeholder,
        description: '',
    },
];


export const dnagLeaders = [
    { name: 'Rob Bundy', role: 'Dnag Leader', photo: placeholder },
];

export const communityGroups = [
    { name: 'Grant Costello', role: 'Group Leader', photo: placeholder },
    { name: 'Ethan Fouch', role: 'Group Leader', photo: placeholder },
];

export const ministryStaff = [
    { name: 'Josh Miller', role: 'Lead Pastor', photo: joshMiller, email: 'info@centercville.com' },
    { name: 'Justin Leitch', role: 'Executive Pastor of Ministries', photo: justinLeitch, email: 'justin@centercville.com' },
    { name: 'Rick Johnson', role: 'Executive Director of Operations', photo: rickJohnson, email: 'rick.johnson@centercville.com' },
    { name: 'Ben Saunders', role: 'Executive Director of Worship and Family Ministries', photo: benSaunders, email: 'ben.saunders@centercville.com' },
    { name: 'Ashley Clubb', role: 'Connections Director', photo: ashleyClubb, email: 'ashley.clubb@centercville.com' },
    { name: 'JP Sealy', role: 'Student Director', photo: jpSealy, email: 'jp.sealy@centercville.com' },
    { name: 'Haley Morgan', role: 'Communications Director', photo: haleyMorgan, email: 'haley.morgan@centercville.com' },
    { name: 'Jess Flannery', role: 'Center Kids Coordinator', photo: jessFlannery, email: 'jess.flannery@centercville.com' },
    { name: 'Sarah Reasons', role: 'Operations Assistant', photo: sarahReasons, email: 'sarah.reasons@centercville.com' },
    { name: 'Jenna Daniel', role: 'Ministries Assistant', photo: jennaDaniel, email: 'jenna.daniel@centercville.com' },
];

export const residents = [
    { name: 'Erin Logan', role: 'College Staff Resident (Women’s Director)', photo: erinLogan, email: 'erin.logan@centercville.com' },
    { name: 'Jose Concepcion', role: 'College Staff Resident', photo: joseConcepcion, email: 'jose.concepcion@centercville.com' },
    { name: 'Keaton Daniel', role: 'College Staff Resident', photo: keatonDaniel, email: 'keaton.daniel@centercville.com' },
    { name: 'Liv Didat', role: 'College Staff Resident', photo: livDidat, email: 'liv.didat@centercville.com' },
    { name: 'Mike Matzeder', role: 'College Staff Resident', photo: mikeMatzeder, email: 'mike.matzeder@centercville.com' },
    { name: 'Marly Rokenbrod', role: 'Missions Resident', photo: marlyRokenbrod, email: 'marly.rokenbrod@centercville.com' },
    { name: 'Ginny Sigalas', role: 'Operations Resident', photo: ginnySigalas, email: 'ginny.sigalas@centercville.com' },
    { name: 'Ian Simmons', role: 'Worship and Students Resident', photo: ianSimmons, email: 'ian.simmons@centercville.com' },
];
