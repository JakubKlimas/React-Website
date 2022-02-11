const MODE_STATE = {
	mode: true,
};

export default (state = MODE_STATE, action) => {
	switch (action.type) {
		case 'SWITCH_NIGHT':
			return { ...state, mode: false };
		case 'SWITCH_DAY':
			return { ...state, mode: true };
		default:
			return state;
	}
};
