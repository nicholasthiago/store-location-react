import React from 'react';
import './header.styles.scss';

import ref from 'app/options/App.reference';
import img from 'assets/munddi-logo-blue.png';

import Div from 'components/essentials/div/div.component';
import Menu from 'components/essentials/menu/menu.component';
import Image from 'components/essentials/images/image.component';

class Header extends React.Component {
	state = {};

	render_Header () {
		return (
			<Div className={'app-header-wrapper'}>
				<Div className={'app-header'} flow={'row'}>
					<Image src={img} />
					<Menu break={425} menu={ref.header.menu} theme={'light'} />
				</Div>
			</Div>
		);
	};

	render () {
		return this.render_Header();
	};
};

export default ( Header );