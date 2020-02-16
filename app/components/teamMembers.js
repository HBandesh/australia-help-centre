/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';
const baseLinkedInURL = "https://www.linkedin.com/in/";

const memberList = [{
    name: "Harnoor Bandesh",
    desigination: "CEO and Founder",
    image:"../../images/CEO.jpg",
    linkedinUrl: "harnoor-bandesh-127642a8/"
},{
    name: "Dixit Jain",
    desigination: "Content Manager",
    image:"../../images/contentManager.jpg",
    linkedinUrl: "dixit-jain-9aa08a153/"
},{
    name: "Navpreet Ahuja",
    desigination: "Digital Media Manager",
    image:"../../images/digitalMediaManager.jpg",
    linkedinUrl: "navpreet-ahuja/"
}]

export const  TeamMembers = () => {
    return(
        <article className="article-wrapper" id="team-members">
            <h2 className="article-heading">Team Members</h2>
            <ul className="member-wrapper">
                {memberList.map(itm => (
                    <li key={itm.name} className="member-item">
                        <img src={itm.image} className="member-image" alt=""></img>
                        <p className="name">{itm.name} 
                            <a href={baseLinkedInURL + itm.linkedinUrl} target="_blank" className="linkedinTag"> <i className="linkedin-icon fab fa-linkedin"></i></a>
                        </p>
                        <p className="desgination">{itm.desigination}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}