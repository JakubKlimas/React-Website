import { combineReducers } from 'redux';
import ModeSwitch from './ModeSwitch';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer,
	mode: ModeSwitch,
});
