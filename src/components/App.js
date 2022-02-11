import React from 'react';

import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Contact from './pages/Contact';
import Homepage from './pages/Workshop';
import AboutMe from './pages/AboutMe';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<div className="ui-container">
			<Header />
			<AnimatePresence exitBeforeEnter initial={false}>
				<div>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Homepage />} />
						<Route path="/aboutme" element={<AboutMe />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default App;
