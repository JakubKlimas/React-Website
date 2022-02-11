import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from '../Form/Form';
import './pagesStyles.scss';
import { connect } from 'react-redux';
import BackgroundNight from '../../img/day.jpg';
import BackgroundDay from '../../img/night.jpg';

const Contact = (props) => {
	const navToPage = (page) => {
		window.location.href = page;
	};

	{
		props.mode
			? (document.body.style.backgroundImage = `url(${BackgroundNight})`)
			: (document.body.style.backgroundImage = `url(${BackgroundDay})`);
	}

	const renderForm = () => {
		if (props.isSignedIn === true) {
			return <Form />;
		} else {
			return (
				<div>
					<h2 className="h2first">Via form</h2>
					<h2 className="h2first">
						You need to log in to contact with me via Form
					</h2>
				</div>
			);
		}
	};
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="contact-us">
				<main data-router-wrapper>
					<div data-router-view="about" className="about">
						<h2 className="h2first">Via Social Media</h2>
						<div className="socialIcons">
							<a href="https://github.com/JakubKlimas">
								<i
									href="https://github.com/JakubKlimas"
									className="fab fa-linkedin-in"
								/>
							</a>
							<a href="https://github.com/JakubKlimas">
								<i class="fab fa-github-square" />
							</a>
						</div>
						{renderForm()}
					</div>
				</main>
			</div>
		</motion.div>
	);
};

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn, mode: state.mode.mode };
};

export default connect(mapStateToProps, {})(Contact);
