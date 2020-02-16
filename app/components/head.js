/**
 * @module Head This module implements the functionality and the HTML of head
 */
import React from 'react';

export const Head = ({}) => {
    return(
            <React.Fragment>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Easy and Efficent ways to get a job in Australia even if you are a foreigner, an International/overseas student like from India or even without local work experience."></meta>
                <link rel="preload" href="style.css" as="style"></link>
                <link rel="preload" href="../../bundle.js" as="script"></link>
                <link rel="preload" href="../fonts/fira-sans.regular.ttf" as="font" type="font/ttf" crossOrigin="true"></link>
                <link rel="preload" href="../fonts/fira-sans.semibold.ttf" as="font" type="font/ttf" crossOrigin="true"></link>
                <link rel="stylesheet" type="text/css" href="/style.css"/>
                <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet"></link>
                <script src="https://kit.fontawesome.com/30cd229773.js" crossOrigin="anonymous"></script>
            </React.Fragment>
        
    );
}