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
            metadataForm: inmobiliaria.metadataForm,
            tipoInmueble: inmobiliaria.location.tipoinmueble
        };

        this.props.updateInmobiliaria(inmobiliaria);
    }

    handleFormAreaChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.area = parseInt(e.target.value);
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

    handleFormAlturaChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.altura = e.target.value;
        this.setState({ form: modifiedForm });
    }

    handleFormUsoChange = (e) => {
        var modifiedForm = this.state.form;
        modifiedForm.uso = e.target.value;
        this.setState({ form: modifiedForm });
    }

    isValidArea() {
        return this.state.form
            && this.state.form.area > 0;
    }

    isValidBanos() {
        return this.state.form
            && this.state.form.banos.length > 0;
    }

    isValidEstrato() {
        return this.state.form
            && this.state.form.estrato.length > 0;
    }

    isValidGarajes() {
        return this.state.form
            && this.state.form.garajes.length > 0;
    }

    isValidHabitaciones() {
        return this.state.form
            && this.state.form.habitaciones.length > 0;
    }

    isValidNumeroAscensores() {
        return this.state.form
            && this.state.form.numeroascensores.length > 0;
    }

    isValidNumeroDeNiveles() {
        return this.state.form
            && this.state.form.numerodeniveles.length > 0;
    }

    isValidNumeroDePiso() {
        return this.state.form
            && this.state.form.numerodepiso.length > 0;
    }

    isValidTiempoDeConstruido() {
        return this.state.form
            && this.state.form.tiempodeconstruido.length > 0;
    }

    isValidVista() {
        return this.state.form
            && this.state.form.vista.length > 0;
    }

    isValidAltura() {
        return this.state.form
            && this.state.form.altura.length > 0;
    }

    isValidUso() {
        return this.state.form
            && this.state.form.uso.length > 0;
    }

    isValidated() {
        let isValid;
        if (this.state.tipoInmueble === 'Apartamento') {
            isValid = this.isValidArea()
                && this.isValidBanos()
                && this.isValidEstrato()
                && this.isValidGarajes()
                && this.isValidHabitaciones()
                && this.isValidNumeroAscensores()
                && this.isValidNumeroDeNiveles()
                && this.isValidNumeroDePiso()
                && this.isValidTiempoDeConstruido()
                && this.isValidVista();
        }
        else if (this.state.tipoInmueble === 'Casa') {
            isValid = this.isValidArea()
                && this.isValidBanos()
                && this.isValidEstrato()
                && this.isValidGarajes()
                && this.isValidHabitaciones()
                && this.isValidNumeroDeNiveles()
                && this.isValidTiempoDeConstruido()
                && this.isValidVista();
        }
        else if (this.state.tipoInmueble === 'Oficina') {
            isValid = this.isValidArea()
                && this.isValidEstrato()
                && this.isValidGarajes()
                && this.isValidNumeroDeNiveles()
                && this.isValidTiempoDeConstruido()
                && this.isValidVista();
        }
        else if (this.state.tipoInmueble === 'Bodega') {
            isValid = this.isValidArea()
                && this.isValidAltura()
                && this.isValidTiempoDeConstruido();
        }
        else if (this.state.tipoInmueble === 'Local') {
            isValid = this.isValidArea()
                && this.isValidTiempoDeConstruido();
        }
        else if (this.state.tipoInmueble === 'Lote') {
            isValid = this.isValidArea()
                && this.isValidEstrato();
        }
        else if (this.state.tipoInmueble === 'Edificio') {
            isValid = this.isValidArea()
                && this.isValidEstrato()
                && this.isValidUso();
        }
        else if (this.state.tipoInmueble === 'Finca') {
            isValid = this.isValidArea()
                && this.isValidUso();
        }
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
            altura, uso,
            tipoInmueble, metadata;
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

            altura = this.state.form.altura;

            uso = this.state.form.uso;

            tipoInmueble = this.state.tipoInmueble;
            metadata = this.state.metadataForm;
        }
        if (tipoInmueble === 'Apartamento')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Casa')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Oficina')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Bodega')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Label>{metadata.altura.label}</Form.Label>
                                    <OverlayTrigger
                                        key={'bottom'}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                {metadata.altura.help}
                                            </Tooltip>}>
                                        <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                                    </OverlayTrigger>
                                    <Form.Control as="select"
                                        isValid={this.isValidAltura()}
                                        isInvalid={!this.isValidAltura()}
                                        onChange={this.handleFormAlturaChange}
                                        value={altura}
                                    >
                                        <option key="" value="">Elije una opción</option>
                                        {metadata.altura.options.map(function (data, key) {
                                            return (
                                                <option key={key} value={data}>{data}</option>)
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Local')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Lote')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Edificio')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>{metadata.uso.label}</Form.Label>
                                    <OverlayTrigger
                                        key={'bottom'}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                {metadata.uso.help}
                                            </Tooltip>}>
                                        <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                                    </OverlayTrigger>
                                    <Form.Control as="select"
                                        isValid={this.isValidUso()}
                                        isInvalid={!this.isValidUso()}
                                        onChange={this.handleFormUsoChange}
                                        value={uso}
                                    >
                                        <option key="" value="">Elije una opción</option>
                                        {metadata.uso.options.map(function (data, key) {
                                            return (
                                                <option key={key} value={data}>{data}</option>)
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        else if (tipoInmueble === 'Finca')
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
                    <Card.Body>
                        <Form>
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
                                    <Form.Label>{metadata.uso.label}</Form.Label>
                                    <OverlayTrigger
                                        key={'bottom'}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                {metadata.uso.help}
                                            </Tooltip>}>
                                        <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                                    </OverlayTrigger>
                                    <Form.Control as="select"
                                        isValid={this.isValidUso()}
                                        isInvalid={!this.isValidUso()}
                                        onChange={this.handleFormUsoChange}
                                        value={uso}
                                    >
                                        <option key="" value="">Elije una opción</option>
                                        {metadata.uso.options.map(function (data, key) {
                                            return (
                                                <option key={key} value={data}>{data}</option>)
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card >
            );
        return (
            <Card bg="danger" text="white" className='step-container-error'>
                <Card.Header style={{ fontWeight: 'bold' }}>Se ha presentado un error</Card.Header>
                <Card.Body>
                    <Form.Label>Formulario para tipo de inmueble no encontrado.</Form.Label>
                </Card.Body>
            </Card>
        );
    }
}