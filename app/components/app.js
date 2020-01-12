/**
 * This Module contains the top most parent component of the App.
 */
import React from "react";
import {Header} from './header'
import {MainContent} from './mainContent';
import {Footer} from './footer';

const App = () => {
	return (
		<main className="wrapper">
			<Header />
			<MainContent/>
			<Footer />
		</main>
	);
}
export default App;