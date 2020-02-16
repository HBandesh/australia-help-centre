/**
 * This Module contains the top most parent component of the App.
 */
import React from "react";
import {Header} from './header'
import {MainContent} from './mainContent';
import {Footer} from './footer';

const App = () => {
	return (
		<React.Fragment>
			<main className="wrapper">
				<Header />
				<MainContent/>
				
			</main>
			<Footer />
		</React.Fragment>
	);
}
export default App;