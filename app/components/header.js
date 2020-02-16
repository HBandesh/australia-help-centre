/**
 * @module Header This module implements the functionality and the HTML of header
 */
import React from 'react';

const scrollToVideos = () => {

}

export const  Header = ({}) => {
    return(
        <header className="header">
            <img src="../../images/tad-logo.png" alt="logo" className="tad-logo"></img>
            <div>
                <h1 className="page-title">THE AUSTRALIAN DREAM</h1>
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li><a className="video-anchor" href="#playlist">Videos</a></li>
                        <li><a className="video-anchor" href="#team-members">Meet the Team</a></li>
                    </ul>
                </nav>
            </div>
            {/* <a className="video-anchor" href="#playlist">Videos</a> */}
        </header>
    );
}