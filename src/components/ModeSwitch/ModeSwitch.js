import './ModeSwitch.scss';
import { switchModeDay, switchModeNight } from '../../Actions';
import { connect } from 'react-redux';

const ModeSwitch = (props) => {
	console.log(props.mode);

	return (
		<div className="container night-mode-available">
			<div className="night-mode-button">
				<input
					onClick={() =>
						props.mode ? props.switchModeNight() : props.switchModeDay()
					}
					type="checkbox"
					className="checkbox"
					id="night-mode"
				/>
				<label htmlFor="night-mode" className="label">
					<i className="fas fa-sun"></i>
					<i className="fas fa-moon"></i>
					<div className="blob"></div>
				</label>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { mode: state.mode.mode };
};

export default connect(mapStateToProps, {
	switchModeNight,
	switchModeDay,
})(ModeSwitch);
