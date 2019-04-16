import React, { Component } from 'react';
import { Form, Col, Card } from 'react-bootstrap';
import Loader from 'react-loader-spinner'

export default class StepCertificate extends Component {
    constructor(props) {
        super(props);

        let inmobiliaria = props.getInmobiliaria();
        inmobiliaria.formulario.direccion = inmobiliaria.location.direccion;
        inmobiliaria.formulario.direccion_formato = inmobiliaria.location.direccion_formato;
        inmobiliaria.formulario.latitud = inmobiliaria.location.markers[0].position.lat;
        inmobiliaria.formulario.longitud = inmobiliaria.location.markers[0].position.lng;
        inmobiliaria.formulario.dpto_ccdgo = inmobiliaria.location.dpto_ccdgo;
        inmobiliaria.formulario.mpio_ccdgo = inmobiliaria.location.mpio_ccdgo;
        inmobiliaria.formulario.tipoinmueble = inmobiliaria.location.tipoinmueble;
        this.state = {
            readyToStep: inmobiliaria.readyToStep,
            form: inmobiliaria.formulario,
        };
        this.props.updateInmobiliaria(inmobiliaria);
    }

    componentDidMount() {
        let inmobiliaria = this.props.getInmobiliaria();
        inmobiliaria.readyToStep = 5;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        headers.append('x-api-key', 'k5gVmRgyCJ84HMbld0r8L796DKVfSnLD7ONLf4lj');
        fetch(`https://api.avaluoenlinea.com/servicios/api_servicio`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify(inmobiliaria.formulario)
        })
            .then(result => result.json())
            .then(response => {
                if (response.servicios === 1)
                    this.generateCertificate(headers, response, inmobiliaria);
                else {
                    this.setState({ readyToStep: 6 });
                    this.setState({ error: 'Se generó el avalúo certificado, pero no se pudo generar el certificado digital.' });
                }
            });
    }

    generateCertificate(headers, formResponse, inmobiliaria) {
        fetch(`https://api.avaluoenlinea.com/servicios/api_servicio`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify({
                "entrada": "tiposervicio",
                "tiposervicio": "lead",
                "idservicio": formResponse.idservicio
            })
        })
            .then(result => result.json())
            .then(response => {
                if (response.status === 200)
                    this.getCertificate(headers, response, inmobiliaria);
                else {
                    this.setState({ readyToStep: 6 });
                    this.setState({ error: response.mensaje });
                }
            });
    }

    getCertificate(headers, certificateResponse, inmobiliaria) {
        fetch(`https://api.avaluoenlinea.com/servicios/api_servicio`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify({
                "entrada": "reporte",
                "idservicio": certificateResponse.idservicio
            })
        })
            .then(result => result.json())
            .then(response => {
                inmobiliaria.reporte.forecast = response.forecast;
                this.setState({ reporte: inmobiliaria.reporte });
                this.setState({ readyToStep: inmobiliaria.readyToStep });
                this.props.updateInmobiliaria(inmobiliaria);
            });
    }

    render() {
        if (this) {
            if (this.state.readyToStep === 4)
                return (
                    <div style={{ textAlign: 'center' }}>
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={80}
                            width={80}
                        />
                    </div>
                );
            else if (this.state.readyToStep === 6)
                return (
                    <Card bg="info" text="white" className='step-container-error'>
                        <Card.Header style={{ fontWeight: 'bold' }}>No se pudo generar el reporte</Card.Header>
                        <Card.Body>
                            <Form.Label>{this.state.error}</Form.Label>
                        </Card.Body>
                    </Card>
                );
            return (
                <React.Fragment>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Card className='step-container'>
                                <Card.Header style={{ fontWeight: 'bold' }}>Valores de venta</Card.Header>
                                <Card.Body>
                                    <Form.Label><b>Valor máximo: </b></Form.Label>
                                    <Form.Label>$ {this.state.reporte.forecast.venta.valor_maximo.toLocaleString()}</Form.Label>
                                    <br />
                                    <Form.Label><b>Valor mínimo: </b></Form.Label>
                                    <Form.Label>$ {this.state.reporte.forecast.venta.valor_minimo.toLocaleString()}</Form.Label>
                                </Card.Body>
                            </Card>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Card className='step-container'>
                                <Card.Header style={{ fontWeight: 'bold' }}>Valores de arriendo</Card.Header>
                                <Card.Body>
                                    <Form.Label><b>Valor máximo: </b></Form.Label>
                                    <Form.Label>$ {this.state.reporte.forecast.arriendo.valor_maximo.toLocaleString()}</Form.Label>
                                    <br />
                                    <Form.Label><b>Valor mínimo: </b></Form.Label>
                                    <Form.Label>$ {this.state.reporte.forecast.arriendo.valor_minimo.toLocaleString()}</Form.Label>
                                </Card.Body>
                            </Card>
                        </Form.Group>
                    </Form.Row>
                </React.Fragment>
            );
        }
    }
}