/**
 * @module Head This module implements the functionality and the HTML of head
 */
import React from 'react';

export const Head = ({}) => {
    return(
        <head>
            <title>CHUNKED POC</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preload" href="style.css" as="style"></link>
            <link rel="preload" href="../../bundle.js" as="script"></link>
            <link rel="preload" href="../fonts/fira-sans.regular.ttf" as="font" type="font/ttf" crossOrigin="true"></link>
            <link rel="preload" href="../fonts/fira-sans.semibold.ttf" as="font" type="font/ttf" crossOrigin="true"></link>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
    );
}