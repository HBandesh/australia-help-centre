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
			<title>How to get job in Australia</title>
			<script type="application/ld+json">
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
					"name": "How to get a job in Australia",
					"description": "Easy and effective ways to get a job in australia even if you are a foreigner, an international student, from overseas like India, or even without local work experience. This video is helpful for the people looking for full time or part time jobs.",
					"thumbnailUrl": "./images/thumbnails/itJobVideo.jpg",
					"contentUrl": "https://www.youtube.com/watch?v=Bq7KPsLwuA8",
					"uploadDate": "2020-01-08T00:00:00-08:00",
					"duration": "PT9M",
					"hasPart": [{
						"@type": "Clip",
						"name": "LinkdeIn",
						"startOffset": 52,
						"endOffset": 262,
						"url": "https://www.youtube.com/watch?v=Bq7KPsLwuA8&t=52"
					},
					{
						"@type": "Clip",
						"name": "Meet Up",
						"startOffset": 263,
						"endOffset": 383,
						"url": "https://www.youtube.com/watch?v=Bq7KPsLwuA8&t=263"
					},
					{
						"@type": "Clip",
						"name": "Slack",
						"startOffset": 386,
						"endOffset": 446,
						"url": "https://www.youtube.com/watch?v=Bq7KPsLwuA8&t=386"
					},
					{
						"@type": "Clip",
						"name": "Seek And Indeed",
						"startOffset": 447,
						"endOffset": 467,
						"url": "https://www.youtube.com/watch?v=Bq7KPsLwuA8&t=447"
					},
					{
						"@type": "Clip",
						"name": "Keep yourself motivated",
						"startOffset": 449,
						"endOffset": 880,
						"url": "https://www.youtube.com/watch?v=Bq7KPsLwuA8&t=449"
					}]
                }
            </script>
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