/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';

const memberList = [{
    name: "Harnoor Bandesh",
    desigination: "",
    image:"",
},{
    name: "Dixit Jain",
    desigination: "",
    image:"",
},{
    name: "Navpreet Singh",
    desigination: "",
    image:"",
}]

export const  TeamMembers = () => {
    return(
        <article className="article-wrapper">
            <ul>
                {memberList.map(itm => (
                    <li key={itm.name}>
                        <img src={itm.image}></img>
                        <p>{itm.name}</p>
                        <p>{itm.desigination}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}