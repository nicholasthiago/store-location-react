import React from 'react';
import styled from 'styled-components';
import './marker.styles.scss';

class EmptyMarker extends React.Component {
	state = {};

	render_Marker (data) {

		return (
			<div className={'google-map-marker'}>
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