import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class StepMapPosition extends Component {
    constructor(props) {
        super(props);

        this.state = { markers: props.getInmobiliaria().location.markers }
    }


    onMarkerDragEnd = (t, map, coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        const markers = [...this.state.markers];
        markers[index] = { ...markers[index], position: { lat, lng } };
        this.setState(markers);
        var inmobiliaria = this.props.getInmobiliaria();
        inmobiliaria.location.markers = markers;
        this.props.updateInmobiliaria(inmobiliaria);
    };

    render() {
        return (
            <Card className='step-container' style={{ height: '600px' }}>
                <Card.Header style={{ fontWeight: 'bold' }}>Datos de ubicación</Card.Header>
                <Card.Body>
                    <h3>Arrastra el marcador para seleccionar la ubicación del inmueble.</h3>
                    <br/>
                    <Map
                        google={this.props.google}
                        style={{ width: '92%', height: '400px' }}
                        zoom={14}
                        initialCenter={this.state.markers[0].position}>
                        {this.state.markers.map((marker, index) => (
                            <Marker
                                position={marker.position}
                                draggable={true}
                                onDragend={(t, map, coord) => this.onMarkerDragEnd(t, map, coord, index)}
                                name={marker.name}
                            />
                        ))}
                    </Map>
                </Card.Body>
            </Card>
        );
    }
}

export default GoogleApiWrapper({
    //dev
    //apiKey: ('AIzaSyBmGYmlNHoipCPWmhztKFSctgKTMHaTPI4')

    //prod
    apiKey: ('AIzaSyCJf9gCCapg3J2Md5NDl9djgQEJJ9IZppo')
})(StepMapPosition)