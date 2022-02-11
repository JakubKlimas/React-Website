import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorkshopBackground from '../../img/workshopBackground.jpg';
import NightWorkshop from '../../img/nightWorkshop.jpg';

import { connect } from 'react-redux';

import '../Modal/Modal.scss';

const Workshop = (props) => {
	const [toShowModal, setToShowModal] = useState(false);

	document.body.style.backgroundImage = props.mode
		? `url(${WorkshopBackground})`
		: `url(${NightWorkshop})`;

	const toggleModal = () => {
		setToShowModal(!toShowModal);
	};
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<h1 className="h2first">Workshop</h1>
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '20',
						fontSize: '30px',
					}}
				>
					Projects comming soon (:
				</p>
			</div>
		</motion.div>
	);
};

const mapStateToProps = (state) => {
	return {
		mode: state.mode.mode,
	};
};

export default connect(mapStateToProps, {})(Workshop);
