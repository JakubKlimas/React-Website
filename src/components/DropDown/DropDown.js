import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../Header/Header.scss';

const DropDown = () => {
	return (
		<div className="dropdown">
			<br />
			<Dropdown text="Select language">
				<Dropdown.Menu>
					<Dropdown.Item>
						<i className="pl flag" />
						Polish
					</Dropdown.Item>
					<Dropdown.Item>
						<i className="us flag" />
						English
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
export default DropDown;
