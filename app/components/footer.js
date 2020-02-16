/**
 * @module Footer This module implements the functionality and the HTML of footer.
 */
import React from 'react';

export const Footer = () => {
    return(
        <footer className="footer">
           <p>&copy; {new Date().getFullYear()} The Australian Dream</p>
        </footer>
    );
}