/**
 * @module routesForNonChunking This modules builds up the page without the concept of sending the 
 * 								HTML back in chunks
 */

import React from 'react';
import {renderToString} from 'react-dom/server';
import {Head} from './app/components/head';
import {Header} from './app/components/header';
import {MainContent} from './app/components/mainContent';
import {Footer} from './app/components/footer';

/**
 * @function getHead This function makes the head part of the HTML. It internally
 * 					 complies the react component of the same as well.
 * @returns {string} Returns the HTML string
 */
const getHead = () => {
	return(`<!DOCTYPE html>
		<html lang="en">
		<head>
			<link rel="canonical" href="https://the-australian-dream.com/" />
			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125622445-1"></script>
			<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'UA-125622445-1');
			</script>
			<title>How to get job in Australia</title>
			${renderToString(<Head/>)}
		</head>
		`);
}

/**
 * @function getHeader This function makes the header part of the HTML. It internally
 * 					 complies the react component of the same as well.
 * @returns {string} Returns the HTML string
 */
const getHeader = () => {
	return(`<body><div id="root"><main class="wrapper">${renderToString(<Header />)}`);
}

/**
 * @function getMainContent This function makes the main content part of the HTML. It internally
 * 					 complies the react component of the same as well.
 * @returns {string} Returns the HTML string
 */
const getMainContent = () => {
	return(`${renderToString(<MainContent/>)}`);
}

/**
 * @function getFooter This function makes the footer part of the HTML. It internally
 * 					   complies the react component of the same as well. Additionally this set the data
 * 					   on a window object. 
 * @returns {string} Returns the HTML string
 */
const getFooter = () => {
	return (`${renderToString(<Footer />)}</ ></div>
		</body>	
		<script src="../../bundle.js"></script>
		</html>`);
}

/**
 * @function generateHtml Ths function generates the complete HTML of the page.
 */

const generateHtml = (req,res,next) => {
	res.send(`${getHead()}${getHeader()}${getMainContent()}${getFooter()}`);
}


/**
 * @function routesForNonChunking This function builds up the eniter HTML and sends back to the browsers 
 * 								  once all of it is done.
 */
export const servePage = () => {
    return ([generateHtml]);
}