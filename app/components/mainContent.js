/**
 * @module MainContent This module implements the functionality and the HTML of Main content
 */
import React from 'react';
import { PageDiscription } from './pageDescription';
import { Playlist } from './playlist';
import { TeamMembers } from './teamMembers';

export const  MainContent = () => {
    return(
        <section>
            <PageDiscription />
            <Playlist />
            <TeamMembers />
        </section>
    );
}