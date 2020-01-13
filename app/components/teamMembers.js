/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';

const memberList = [{
    name: "Harnoor Bandesh",
    desigination: "CEO and Protagonist",
    image:"../../images/CEO.jpg",
},{
    name: "Dixit Jain",
    desigination: "Content Manager",
    image:"../../images/contentManager.jpg",
},{
    name: "Navpreet Singh",
    desigination: "Digital Media Manager",
    image:"../../images/digitalMediaManager.jpg",
}]

export const  TeamMembers = () => {
    return(
        <article className="article-wrapper">
            <h2 className="article-heading">Team Members</h2>
            <ul className="member-wrapper">
                {memberList.map(itm => (
                    <li key={itm.name} className="member-item">
                        <img src={itm.image} className="member-image" alt=""></img>
                        <p className="name">{itm.name}</p>
                        <p className="desgination">{itm.desigination}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}