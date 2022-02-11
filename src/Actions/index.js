export const signIn = (email) => {
	return {
		type: 'SIGN_IN',
		payload: email,
	};
};

export const signOutX = () => {
	return {
		type: 'SIGN_OUT',
	};
};

export const switchModeNight = () => {
	return {
		type: 'SWITCH_NIGHT',
	};
};

export const switchModeDay = () => {
	return {
		type: 'SWITCH_DAY',
	};
};
