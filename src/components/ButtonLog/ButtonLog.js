import React, { useState } from 'react';
import { authentication } from '../Firebase/Firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { signIn, signOutX } from '../../Actions';

const ButtonLog = (props) => {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(authentication, provider)
			.then((re) => {
				props.signIn(re.user.email);
				console.log(re.user.email);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const signOutWithGoogle = () => {
		signOut(authentication)
			.then(() => {
				props.signOutX();
				console.log('success');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<button
				onClick={props.isSignedIn ? signOutWithGoogle : signInWithGoogle}
				className="buttonLogin"
			>
				{props.isSignedIn ? 'Sign out' : 'Sign in'}
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
	signIn,
	signOutX,
})(ButtonLog);
