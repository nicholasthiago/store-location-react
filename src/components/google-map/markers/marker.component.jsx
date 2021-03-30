import React from 'react';
import styled from 'styled-components';
import './marker.styles.scss';

class EmptyMarker extends React.Component {
	state = {};

	handle_Click (data) {
		let url = `https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}`;

		return window.location = url;
	};

	render_Marker (data) {

		return (
			<div className={'google-map-marker'} onMouseDown={() => this.handle_Click(data)}>
				<span>
					{ this.props.children }
				</span>
			</div>
		);
	};

	render () {
		return this.render_Marker(this.props.data);
	}
};


const Marker = styled(EmptyMarker)`
	width: 32px;
	height: 32px;
	background: #FF5756;
	border-radius: 12px;
`;

export default ( Marker );