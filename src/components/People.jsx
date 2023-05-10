//People.jsx component

import { people } from "../assets/data";

import React from "react";

export default function People() {

    //array filtering
    const chemists = people.filter((person) => person.profession === 'chemist');

    //const listItems = people.map((person)=> <li>{person}</li>)
    //const listItems = chemists.map((person)=> <li>{person.name}</li>)
    const listItems = chemists.map((person)=> <li>{person.name}</li>)
    return (
        <ul>
            {listItems}
        </ul>
    )
}