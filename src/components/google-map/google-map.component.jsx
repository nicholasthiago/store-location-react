import React from 'react';
import GoogleMapReact from 'google-map-react';
import './google-map.styles.scss';

const StoreItem = ({ cName }) => { <div className={cName}></div> };

class GoogleMap extends React.Component {
	static defaultProps = {
		zoom    : 8	,
		center  : { lat: -23.185, lng: -47.021 }	,
		style	: { height:'64vh', width: '80vw' }	,
	};

	render_Stores (data) {
		return (data).map( (s,i) => {
			return (
				<StoreItem lat={Number(s.lat)} lng={Number(s.lng)} />
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
				></GoogleMapReact>
			</div>
		);
	};
};

export default ( GoogleMap );