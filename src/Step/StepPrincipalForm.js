import React, { Component } from 'react';
import { Form, OverlayTrigger, Button, Col, Card, Tooltip } from 'react-bootstrap';
import Loader from 'react-loader-spinner'

export default class StepPrincipalForm extends Component {
    constructor(props) {
        super(props);

        let inmobiliaria = props.getInmobiliaria();
        inmobiliaria.readyToStep = 3;
        this.state = {
            readyToStep: inmobiliaria.readyToStep,
            form: inmobiliaria.formulario,
            metadataForm: inmobiliaria.metadataForm
        };

        this.props.updateInmobiliaria(inmobiliaria);
    }

    handleFormAreaChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.area = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormBanosChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.banos = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormEstratoChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.estrato = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormGarajesChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.garajes = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormHabitacionesChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.habitaciones = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormNumeroAscensoresChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.numeroascensores = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormNumeroDeNivelesChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.numerodeniveles = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormNumeroDePisoChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.numerodepiso = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormTiempoDeConstruidoChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.tiempodeconstruido = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormVistaChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.vista = e.target.value;
        this.setState({ form: modifiedForm });
    }

    isValidArea() {
        return this.state.form.area
            && this.state.form.area > 0;
    }

    isValidBanos() {
        return this.state.form.banos
            && this.state.form.banos.length > 0;
    }

    isValidEstrato() {
        return this.state.form.estrato
            && this.state.form.estrato.length > 0;
    }

    isValidGarajes() {
        return this.state.form.garajes
            && this.state.form.garajes.length > 0;
    }

    isValidHabitaciones() {
        return this.state.form.habitaciones
            && this.state.form.habitaciones.length > 0;
    }

    isValidNumeroAscensores() {
        return this.state.form.numeroascensores
            && this.state.form.numeroascensores.length > 0;
    }

    isValidNumeroDeNiveles() {
        return this.state.form.numerodeniveles
            && this.state.form.numerodeniveles.length > 0;
    }

    isValidNumeroDePiso() {
        return this.state.form.numerodepiso
            && this.state.form.numerodepiso.length > 0;
    }

    isValidTiempoDeConstruido() {
        return this.state.form.tiempodeconstruido
            && this.state.form.tiempodeconstruido.length > 0;
    }

    isValidVista() {
        return this.state.form.vista
            && this.state.form.vista.length > 0;
    }

    isValidated() {
        let isValid = this.isValidArea()
            && this.isValidBanos()
            && this.isValidEstrato()
            && this.isValidGarajes()
            && this.isValidHabitaciones()
            && this.isValidNumeroAscensores()
            && this.isValidNumeroDeNiveles()
            && this.isValidNumeroDePiso()
            && this.isValidTiempoDeConstruido()
            && this.isValidVista();
        if (isValid)
            this.assignValuesToProp();
        return isValid;
    }

    assignValuesToProp() {
        var inmobiliaria = this.props.getInmobiliaria();
        inmobiliaria.formulario = this.state.form;
        this.props.updateInmobiliaria(inmobiliaria);
    }

    render() {
        if (this && this.state.readyToStep !== 3) {
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
        }
        var banos, estrato, garajes, habitaciones, numeroascensores,
            numerodeniveles, numerodepiso, tiempodeconstruido, vista,
            metadata;
        if (this && this.state) {
            banos = this.state.form.banos;
            estrato = this.state.form.estrato;
            garajes = this.state.form.garajes;
            habitaciones = this.state.form.habitaciones;
            numeroascensores = this.state.form.numeroascensores;
            numerodeniveles = this.state.form.numerodeniveles;
            numerodepiso = this.state.form.numerodepiso;
            tiempodeconstruido = this.state.form.tiempodeconstruido;
            vista = this.state.form.vista;
            metadata = this.props.getInmobiliaria().metadataForm;
            debugger
        }
        return (
            <Card className='step-container'>
                <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.area.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.area.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control
                                type="number"
                                placeholder="Área en metros cuadrados"
                                defaultValue={this.state.form.area}
                                isValid={this.isValidArea()}
                                isInvalid={!this.isValidArea()}
                                onChange={this.handleFormAreaChange}
                                min={1}
                            />
                            <Form.Control.Feedback type="invalid">El campo área es obligatorio.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.banos.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.banos.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidBanos()}
                                isInvalid={!this.isValidBanos()}
                                onChange={this.handleFormBanosChange}
                                value={banos}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.banos.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.estrato.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.estrato.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidEstrato()}
                                isInvalid={!this.isValidEstrato()}
                                onChange={this.handleFormEstratoChange}
                                value={estrato}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.estrato.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.garajes.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.garajes.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidGarajes()}
                                isInvalid={!this.isValidGarajes()}
                                onChange={this.handleFormGarajesChange}
                                value={garajes}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.garajes.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.habitaciones.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.habitaciones.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidHabitaciones()}
                                isInvalid={!this.isValidHabitaciones()}
                                onChange={this.handleFormHabitacionesChange}
                                value={habitaciones}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.habitaciones.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.vista.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.vista.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidVista()}
                                isInvalid={!this.isValidVista()}
                                onChange={this.handleFormVistaChange}
                                value={vista}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.vista.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.numeroascensores.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.numeroascensores.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidNumeroAscensores()}
                                isInvalid={!this.isValidNumeroAscensores()}
                                onChange={this.handleFormNumeroAscensoresChange}
                                value={numeroascensores}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.numeroascensores.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.numerodeniveles.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.numerodeniveles.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidNumeroDeNiveles()}
                                isInvalid={!this.isValidNumeroDeNiveles()}
                                onChange={this.handleFormNumeroDeNivelesChange}
                                value={numerodeniveles}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.numerodeniveles.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.numerodepiso.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.numerodepiso.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidNumeroDePiso()}
                                isInvalid={!this.isValidNumeroDePiso()}
                                onChange={this.handleFormNumeroDePisoChange}
                                value={numerodepiso}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.numerodepiso.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>{metadata.tiempodeconstruido.label}</Form.Label>
                            <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {metadata.tiempodeconstruido.help}
                                    </Tooltip>}>
                                <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                            </OverlayTrigger>
                            <Form.Control as="select"
                                isValid={this.isValidTiempoDeConstruido()}
                                isInvalid={!this.isValidTiempoDeConstruido()}
                                onChange={this.handleFormTiempoDeConstruidoChange}
                                value={tiempodeconstruido}
                            >
                                <option key="" value="">Elije una opción</option>
                                {metadata.tiempodeconstruido.options.map(function (data, key) {
                                    return (
                                        <option key={key} value={data}>{data}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Card >
        );
    }
}