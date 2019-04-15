import React, { Component } from 'react';
import { Form, Col, Card, InputGroup } from 'react-bootstrap';

export default class StepLocation extends Component {
    constructor(props) {
        super(props);

        let direccionParts = this.props.getInmobiliaria().location.direccion.split('+');

        this.state = {
            departamentos: [],
            municipios: [],
            tiposinmueble: [],
            tiposvia: [],
            departamento: this.props.getInmobiliaria().location.dpto_ccdgo,
            municipio: this.props.getInmobiliaria().location.mpio_ccdgo,
            tipoInmueble: this.props.getInmobiliaria().location.tipoinmueble,
            direccion_parte_1: direccionParts[0],
            direccion_parte_2: direccionParts[1],
            direccion_parte_3: direccionParts[2],
            direccion_parte_4: direccionParts[3],
        };
        this.getMunicipios(this.state.departamento);
    }

    componentDidMount() {
        this.getDepartamentos();
    }

    getDepartamentos() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-api-key', 'k5gVmRgyCJ84HMbld0r8L796DKVfSnLD7ONLf4lj');
        fetch(`https://api.avaluoenlinea.com/servicios/api_options`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify({
                "entrada": "dpto"
            })
        })
            .then(result => result.json())
            .then(response => {
                this.setState({ departamentos: response.lista.map(function (data, index) { return { key: data.dpto_ccdgo, value: data.nombre } }) });
                this.setState({ tiposinmueble: response.tipoinmueble });
                this.setState({ tiposvia: response.tipovia });
            });
    }

    getMunicipios(depto) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-api-key', 'k5gVmRgyCJ84HMbld0r8L796DKVfSnLD7ONLf4lj');
        fetch(`https://api.avaluoenlinea.com/servicios/api_options`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify({
                "entrada": "mpio",
                "dpto_ccdgo": depto
            })
        })
            .then(result => result.json())
            .then(response => {
                this.setState({ municipios: response.lista.map(function (data, index) { return { key: data.mpio_ccdgo, value: data.nombre } }) });
            });
    }

    getMetadataForm() {
        let inmobiliaria = this.props.getInmobiliaria();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-api-key', 'k5gVmRgyCJ84HMbld0r8L796DKVfSnLD7ONLf4lj');
        fetch(`https://api.avaluoenlinea.com/servicios/api_options`, {
            method: 'POST',
            headers: headers,
            cache: 'default',
            body: JSON.stringify({
                "entrada": "tipoinmueble",
                "dpto_ccdgo": inmobiliaria.location.dpto_ccdgo,
                "mpio_ccdgo": inmobiliaria.location.mpio_ccdgo,
                "tipoinmueble": inmobiliaria.location.tipoinmueble
            })
        })
        .then(result => result.json())
        .then(response => {
                inmobiliaria.metadataForm = response.formulario;
                this.props.updateInmobiliaria(inmobiliaria);
            });
    }

    handleDepartamentoChange = (e) => {
        this.setState({ departamento: e.target.value });
        this.getMunicipios(e.target.value);
        this.assignValueMunicipio('');
    }

    handleMunicipioChange = (e) => {
        this.assignValueMunicipio(e.target.value);
    }

    handleTipoInmuebleChange = (e) => {
        this.setState({ tipoInmueble: e.target.value });
    }

    handleDireccionParte1Change = (e) => {
        this.setState({ direccion_parte_1: e.target.value });
    }

    handleDireccionParte2Change = (e) => {
        this.setState({ direccion_parte_2: e.target.value });
    }

    handleDireccionParte3Change = (e) => {
        this.setState({ direccion_parte_3: e.target.value });
    }

    handleDireccionParte4Change = (e) => {
        this.setState({ direccion_parte_4: e.target.value });
    }

    assignValueMunicipio(value) {
        this.setState({ municipio: value });
    }

    isValidated() {
        let isValid = this.isValidDepartamento()
            && this.isValidMunicipio()
            && this.isValidTipoInmueble()
            && this.isValidDireccionParte1()
            && this.isValidDireccionParte2()
            && this.isValidDireccionParte3()
            && this.isValidDireccionParte4()
            && this.isValidDireccion();
        if (isValid)
            this.assignValuesToProp();
        return isValid;
    }

    assignValuesToProp() {
        var inmobiliaria = this.props.getInmobiliaria();
        inmobiliaria.location.dpto_ccdgo = this.state.departamento;
        inmobiliaria.location.mpio_ccdgo = this.state.municipio;
        inmobiliaria.location.tipoinmueble = this.state.tipoInmueble;
        inmobiliaria.location.direccion = [this.state.direccion_parte_1, this.state.direccion_parte_2.toLowerCase(), this.state.direccion_parte_3.toLowerCase(), this.state.direccion_parte_4.toLowerCase()].join('+');
        inmobiliaria.location.direccion_formato = [this.state.direccion_parte_1, this.state.direccion_parte_2, this.state.direccion_parte_3, this.state.direccion_parte_4].join(' ').toUpperCase();
        inmobiliaria.readyToStep = 2;
        this.props.updateInmobiliaria(inmobiliaria);
        this.getMetadataForm();
    }

    isValidDepartamento() {
        return this.state.departamento
            && this.state.departamento.length > 0;
    }

    isValidMunicipio() {
        return this.state.municipio
            && this.state.municipio.length > 0;
    }

    isValidTipoInmueble() {
        return this.state.tipoInmueble
            && this.state.tipoInmueble.length > 0;
    }

    isValidDireccionParte1() {
        return this.state.direccion_parte_1
            && this.state.direccion_parte_1.length > 0;
    }

    isValidDireccionParte2() {
        return this.state.direccion_parte_2
            && this.state.direccion_parte_2.length > 0;
    }

    isValidDireccionParte3() {
        return this.state.direccion_parte_3
            && this.state.direccion_parte_3.length > 0;
    }

    isValidDireccionParte4() {
        return this.state.direccion_parte_4
            && this.state.direccion_parte_4.length > 0;
    }

    isValidDireccion() {
        return this.isValidDireccionParte1()
            && this.isValidDireccionParte2()
            && this.isValidDireccionParte3()
            && this.isValidDireccionParte4();
    }

    render() {
        var tipoInmueble, departamento, municipio, direccion_parte_1;
        if (this && this.state) {
            tipoInmueble = this.state.tipoInmueble;
            departamento = this.state.departamento;
            municipio = this.state.municipio;
            direccion_parte_1 = this.state.direccion_parte_1;
        }
        return (
            <Card className='step-container'>
                <Card.Header style={{ fontWeight: 'bold' }}>Datos de locación</Card.Header>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Tipo de inmueble</Form.Label>
                            <Form.Control as="select"
                                required
                                isValid={this.isValidTipoInmueble()}
                                isInvalid={!this.isValidTipoInmueble()}
                                value={tipoInmueble}
                                onChange={this.handleTipoInmuebleChange}>
                                <option key="" value="">Elije una opción</option>
                                {this.state.tiposinmueble.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Elije un tipo de inmueble.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Departamento</Form.Label>
                            <Form.Control as="select"
                                required
                                isValid={this.isValidDepartamento()}
                                isInvalid={!this.isValidDepartamento()}
                                value={departamento}
                                onChange={this.handleDepartamentoChange}>
                                <option key="" value="">Elije una opción</option>
                                {this.state.departamentos.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.key} selected={this && this.state.departamento === data.key}>{data.value}</option>
                                    );
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Elije un departamento.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Municipio</Form.Label>
                            <Form.Control as="select"
                                required
                                isValid={this.isValidMunicipio()}
                                isInvalid={!this.isValidMunicipio()}
                                value={municipio}
                                onChange={this.handleMunicipioChange}>
                                <option key="" value="">Elije una opción</option>
                                {this.state.municipios.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.key} selected={this && this.state.municipio === data.key}>{data.value}</option>)
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Elije un municipio.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12">
                            <Form.Label>Dirección</Form.Label>
                            <InputGroup>
                                <Form.Control as="select"
                                    required
                                    isValid={this.isValidDireccionParte1()}
                                    isInvalid={!this.isValidDireccionParte1()}
                                    value={direccion_parte_1}
                                    onChange={this.handleDireccionParte1Change}>
                                    <option key="" value="">Elije una opción</option>
                                    {this.state.tiposvia.map(function (data, key) {
                                        return (
                                            <option key={key} value={data} selected={this && this.state.direccion_parte_1 === data}>{data}</option>)
                                    })}
                                </Form.Control>
                                <Form.Control
                                    type="text"
                                    required
                                    isValid={this.isValidDireccionParte2()}
                                    isInvalid={!this.isValidDireccionParte2()}
                                    onChange={this.handleDireccionParte2Change}
                                    defaultValue={this.state.direccion_parte_2}
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputNumberPrepend">#</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    required
                                    aria-describedby="inputNumberPrepend"
                                    isValid={this.isValidDireccionParte3()}
                                    isInvalid={!this.isValidDireccionParte3()}
                                    onChange={this.handleDireccionParte3Change}
                                    defaultValue={this.state.direccion_parte_3}
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputNumberHomePrepend">-</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    required
                                    aria-describedby="inputNumberHomePrepend"
                                    isValid={this.isValidDireccionParte4()}
                                    isInvalid={!this.isValidDireccionParte4()}
                                    onChange={this.handleDireccionParte4Change}
                                    defaultValue={this.state.direccion_parte_4}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Especifica una dirección.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Card>
        );
    }
}