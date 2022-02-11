import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Form.scss';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';

const Form = (props) => {
	const [toSend, setToSend] = useState({
		form_subject: '',
		form_message: '',
		form_email: props.userEmail,
	});
	const [toShowModal, setToShowModal] = useState(false);

	const toggleModal = () => {
		setToShowModal(!toShowModal);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (toSend.form_subject === '' || toSend.form_message === '') {
			setToShowModal(!toShowModal);
			return;
		}
		send(
			'service_q7d72f7',
			'template_fxzy5kj',
			toSend,
			'user_ANWmSw1GYquiRzrwF9hCp'
		)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
			})
			.catch((err) => {
				console.log('FAILED...', err);
			});

		setToSend({
			form_subject: '',
			form_message: '',
			form_email: props.userEmail,
		});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	console.log(toSend);

	return (
		<div>
			<div id="container">
				<form onSubmit={onSubmit}>
					<h1>Via Form</h1>
					<input
						value={toSend.form_subject}
						onChange={handleChange}
						type="text"
						name="form_subject"
						placeholder="Subject"
					/>
					{toShowModal ? (
						<React.Fragment>
							<Modal>
								<div className="my-modal">
									<h1 className="h1Modal">
										You need to fill all fields before sending!
									</h1>
									<button className="modal-close" onClick={toggleModal}>
										X
									</button>
								</div>
							</Modal>
						</React.Fragment>
					) : null}
					<textarea
						value={toSend.form_message}
						onChange={handleChange}
						name="form_message"
						type="text"
						placeholder="Message"
					/>
					<button type="submit" className="buttonsend">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { userEmail: state.auth.userEmail };
};

export default connect(mapStateToProps, {})(Form);
