import React from 'react';
import { Link } from 'react-router-dom';

import DropDown from '../DropDown/DropDown';
import ButtonLog from '../ButtonLog/ButtonLog';
import './Header.scss';
import ModeSwitch from '../ModeSwitch/ModeSwitch';

const Header = () => {
	const navSlide = () => {
		const nav = document.querySelector('.nav-links');
		const modeSwitch = document.querySelector('.modeswitch');
		nav.classList.toggle('nav-active');
		modeSwitch.classList.toggle('modeswitch-active');
	};

	return (
		<div className="nav">
			<div onClick={() => navSlide()} className="burger">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
			<div className="nav-links">
				<Link to="/aboutme" className="buttonHeader">
					<span>About Me</span>
				</Link>
				<Link to="/" className="buttonHeader">
					<span>Workshop</span>
				</Link>
				<Link to="/contact" className="buttonHeader">
					<span>Contact</span>
				</Link>
				<span>
					<DropDown />
				</span>

				<div className="buttonLog">
					<ButtonLog />
				</div>
			</div>
			<div className="modeswitch">
				<ModeSwitch />
			</div>
		</div>
	);
};

export default Header;
