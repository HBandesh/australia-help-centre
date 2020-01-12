/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';

const videoList = [{
    thumbnail: "../../images/thumbnails/itJobVideo.jpg",
    url: "https://www.youtube.com/watch?v=Bq7KPsLwuA8",
    alt: "how to get a job in australia",
    description: "loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum loreum ipsum "
}]

export const Playlist = () => {
    return(
        <article className="article-wrapper">
            <h2 className="playlist-heading">Playlist</h2>
            <ul >
                {videoList.map(itm =>(
                    <li key={itm.url} className="list-item">
                        <a href={itm.url} target="_blank" title={itm.alt} className="list-item-anchor">
                            <p className="thumbnail-wrapper">
                                <img src={itm.thumbnail} alt={itm.alt} className="thumbnail"></img>
                            </p>
                            <p className="video-desc">
                                {itm.description}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
}