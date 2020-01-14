/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';

export const PageDiscription = () => {
    return(
        <article className="article-wrapper">
            <div className="page-desc">
                Hey Mates! We are a group of cool university students from India currently studying in Adelaide. We make youtube 
                videos about various topics such as how to get a job in Australia and many more! which will help you both as 
                <h2 className="meta-desc"> an International/overseas student and as a foreigner even without local work experience</h2> . You can check our 
                youtube channel and don't forget to give the video a thumbs up and subscribe to the <a className="linkedin" target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCTyLBkVjGZTrFdJm109-bQA">channel</a> so that you never miss an 
                update from us. :) 
            </div>
        </article>
    );
}