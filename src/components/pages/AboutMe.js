import React, { useEffect, useState } from 'react';
import MyPhoto from '../../img/myPhoto.jpg';
import MyHome from '../../img/myHome.jpg';
import SeaBackground from '../../img/sea.jpg';
import MountainBackground from '../../img/mountainsBackground.jpg';
import CodeBackground from '../../img/codeBackground.jpg';
import NightCode from '../../img/nightProgramming.png';
import NightSea from '../../img/nightSea.jpg';
import NightMountains from '../../img/nightMountains.jpg';
import Programming from '../../img/programming.jpg';
import './pagesStyles.scss';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

const AboutMe = (props) => {
	const [backgroundNumber, setBackgroundNumber] = useState(0);

	useEffect(() => {
		const z = document.getElementById('sectionOne');
		const x = document.getElementById('sectionTwo');
		const y = document.getElementById('sectionThree');

		document.getElementById('wrapper').addEventListener('scroll', (evt) => {
			console.log(evt.target.scrollTop);
			const scroll = evt.target.scrollTop;
			if (scroll > z.offsetTop) {
				setBackgroundNumber(0);
				document.body.style.backgroundImage = props.mode
					? `url(${SeaBackground})`
					: `url(${NightSea})`;
			}
			if (scroll > x.offsetTop - 350) {
				setBackgroundNumber(1);
				document.body.style.backgroundImage = props.mode
					? `url(${MountainBackground})`
					: `url(${NightMountains})`;
			}
			if (scroll > y.offsetTop - 350) {
				setBackgroundNumber(2);
				document.body.style.backgroundImage = props.mode
					? `url(${CodeBackground})`
					: `url(${NightCode})`;
			}
		});
	}, [props.mode]);

	document.body.style.backgroundImage = props.mode
		? `url(${SeaBackground})`
		: `url(${NightSea})`;

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div id="wrapper" className="wrapper">
				<div className="sections">
					<section id="sectionOne" className="sectionOne">
						<div className="container">
							<h1 className="firstTitle">Hi. I am Kuba</h1>
							<p className="description">
								I'm from Poland. This is my portfolio website.
							</p>
						</div>
						<img className="profilePhoto" src={MyPhoto} />
					</section>
					<section id="sectionTwo" className="sectionTwo">
						<img className="profilePhoto" src={MyHome} />
						<div className="container">
							<h2 className="secoundTitle">Sailor from mountains</h2>
							<p className="description">
								I finished Maritime University in Gdynia and I worked on cargo
								ships as Mechanical Engineer. I lived in small town located in
								mountains on the south of the Poland.
							</p>
						</div>
					</section>
					<section id="sectionThree" className="sectionThree">
						<div className="container">
							<h2 className="thirdTitle">Who become QA Engineer</h2>
							<p className="description">
								I decided to disguise to IT industry. I looked a lot for
								position which will suit me and I choose to become QA Engineer.
							</p>
						</div>
						<img className="profilePhoto" src={Programming} />
					</section>
				</div>
			</div>
		</motion.div>
	);
};

const mapStateToProps = (state) => {
	return {
		mode: state.mode.mode,
	};
};

export default connect(mapStateToProps, {})(AboutMe);
