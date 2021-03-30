import React from 'react';
import GoogleMapReact from 'google-map-react';
import './google-map.styles.scss';

import Marker from './markers/marker.component';

class GoogleMap extends React.Component {
	static defaultProps = {
		zoom    : 8	,
		center  : { lat: -23.185, lng: -44.821 }	,
		style	: { height:'64vh', width: '80vw' }	,
	};

	render_Stores (data) {
		return (data).map( (s,i) => {
			return (
				<Marker data={s} lat={Number(s.lat)} lng={Number(s.lng)} key={i} />
			);
		})
	};

	render() {
		return (
			<div className={'app-google-map'} style={this.props.style}>
				<GoogleMapReact
					defaultZoom={this.props.zoom}
					defaultCenter={this.props.center}
					bootstrapURLKeys={{ key: 'AIzaSyCKc8pPsDZnv6A7w0j2GYcuJZdCe_qEdps' }}
				>
					{ this.render_Stores(this.props.data) }
				</GoogleMapReact>
			</div>
		);
	};
};

export default ( GoogleMap );