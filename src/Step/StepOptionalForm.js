import React, { Component } from 'react';
import { Form, OverlayTrigger, Button, Col, Card, Tooltip } from 'react-bootstrap';
import Loader from 'react-loader-spinner'

export default class StepOptionalForm extends Component {
  constructor(props) {
    super(props);

    let inmobiliaria = props.getInmobiliaria();
    inmobiliaria.readyToStep = 4;
    this.state = {
      readyToStep: inmobiliaria.readyToStep,
      form: inmobiliaria.formulario,
      metadataForm: inmobiliaria.metadataForm,
      tipoInmueble: inmobiliaria.location.tipoinmueble
    };

    this.props.updateInmobiliaria(inmobiliaria);
  }

  handleFormBalconChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.balcon = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormBanoServicio = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.banoservicio = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormClubHouseChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.clubhouse = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormConjuntoCerrado = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.conjuntocerrado = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormCuartoDeServicio = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.cuartodeservicio = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormDepositooCuartoUtil = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.depositoocuartoutil = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormEstudiooBiblioteca = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.estudioobiblioteca = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormHallDeAlcobasoEstar = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.halldealcobasoestar = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormParqueaderoVisitantes = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.parqueaderovisitantes = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormPorteria = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.porteria = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormRemodelado = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.remodelado = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormTerraza = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.terraza = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormAreaTerrazaChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.areaterraza = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  handleFormZonaDeLavanderia = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.zonadelavanderia = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormBanosPrivados = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.banosprivados = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormBanosPublicos = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.banospublicos = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormInteligente = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.inteligente = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormOficinaChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.oficina = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormParqueIndustrialChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.parqueindustrial = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormMesanineChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.mesanine = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormTipoLocalChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.tipolocal = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormFrenteChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.frente = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  handleFormFondoChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.fondo = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  handleFormGarajesChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.garajes = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  handleFormNumeroDeNivelesChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.numerodeniveles = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  handleFormAreaTerrenoChange = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.areaterreno = parseInt(e.target.value);
    this.setState({ form: modifiedForm });
  }

  isValidBalcon() {
    return this.state.form
      && this.state.form.balcon.length > 0;
  }

  isValidBanoServicio() {
    return this.state.form
      && this.state.form.banoservicio.length > 0;
  }

  isValidClubHouse() {
    return this.state.form
      && this.state.form.clubhouse.length > 0;
  }

  isValidConjuntoCerrado() {
    return this.state.form
      && this.state.form.conjuntocerrado.length > 0;
  }

  isValidCuartoDeServicio() {
    return this.state.form
      && this.state.form.cuartodeservicio.length > 0;
  }

  isValidDepositooCuartoUtil() {
    return this.state.form
      && this.state.form.depositoocuartoutil.length > 0;
  }

  isValidEstudiooBiblioteca() {
    return this.state.form
      && this.state.form.estudioobiblioteca.length > 0;
  }

  isValidHallDeAlcobasoEstar() {
    return this.state.form
      && this.state.form.halldealcobasoestar.length > 0;
  }

  isValidParqueaderoVisitantes() {
    return this.state.form
      && this.state.form.parqueaderovisitantes.length > 0;
  }

  isValidPorteria() {
    return this.state.form
      && this.state.form.porteria.length > 0;
  }

  isValidRemodelado() {
    return this.state.form
      && this.state.form.remodelado.length > 0;
  }

  isValidTerraza() {
    return this.state.form
      && this.state.form.terraza.length > 0;
  }

  isValidAreaTerraza() {
    return this.state.form
      && this.state.form.areaterraza >= 0;
  }

  isValidZonaDeLavanderia() {
    return this.state.form
      && this.state.form.zonadelavanderia.length > 0;
  }

  isValidBanosPrivados() {
    return this.state.form
      && this.state.form.banosprivados.length > 0;
  }

  isValidBanosPublicos() {
    return this.state.form
      && this.state.form.banospublicos.length > 0;
  }

  isValidInteligente() {
    return this.state.form
      && this.state.form.inteligente.length > 0;
  }

  isValidOficina() {
    return this.state.form
      && this.state.form.oficina.length > 0;
  }

  isValidParqueIndustrial() {
    return this.state.form
      && this.state.form.parqueindustrial.length > 0;
  }

  isValidMesanine() {
    return this.state.form
      && this.state.form.mesanine.length > 0;
  }

  isValidTipoLocal() {
    return this.state.form
      && this.state.form.tipolocal.length > 0;
  }

  isValidFrente() {
    return this.state.form
      && this.state.form.frente >= 1;
  }

  isValidFondo() {
    return this.state.form
      && this.state.form.fondo >= 1;
  }

  isValidGarajes() {
    return this.state.form
      && this.state.form.garajes >= 0;
  }

  isValidNumeroDeNiveles() {
    return this.state.form
      && this.state.form.numerodeniveles >= 1;
  }

  isValidAreaTerreno() {
    return this.state.form
      && this.state.form.areaterreno >= 1;
  }

  isValidated() {
    let isValid;
    if (this.state.tipoInmueble === 'Apartamento'
      || this.state.tipoInmueble === 'Casa') {
      isValid = this.isValidBalcon()
        && this.isValidBanoServicio()
        && this.isValidClubHouse()
        && this.isValidConjuntoCerrado()
        && this.isValidCuartoDeServicio()
        && this.isValidDepositooCuartoUtil()
        && this.isValidEstudiooBiblioteca()
        && this.isValidHallDeAlcobasoEstar()
        && this.isValidParqueaderoVisitantes()
        && this.isValidPorteria()
        && this.isValidRemodelado()
        && this.isValidTerraza()
        && this.isValidAreaTerraza()
        && this.isValidZonaDeLavanderia();
    }
    else if (this.state.tipoInmueble === 'Oficina') {
      isValid = this.isValidDepositooCuartoUtil()
        && this.isValidParqueaderoVisitantes()
        && this.isValidPorteria()
        && this.isValidRemodelado()
        && this.isValidTerraza()
        && this.isValidAreaTerraza()
        && this.isValidBanosPrivados()
        && this.isValidBanosPublicos()
        && this.isValidInteligente();
    }
    else if (this.state.tipoInmueble === 'Bodega') {
      isValid = this.isValidOficina()
        && this.isValidParqueIndustrial();
    }
    else if (this.state.tipoInmueble === 'Local') {
      isValid = this.isValidMesanine()
        && this.isValidTipoLocal();
    }
    else if (this.state.tipoInmueble === 'Lote') {
      isValid = this.isValidFrente()
        && this.isValidFondo();
    }
    else if (this.state.tipoInmueble === 'Edificio') {
      isValid = this.isValidGarajes()
        && this.isValidNumeroDeNiveles();
    }
    else if (this.state.tipoInmueble === 'Finca') {
      isValid = this.isValidAreaTerreno();
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
    if (this && this.state.readyToStep !== 4) {
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
    var balcon, banoservicio, clubhouse, conjuntocerrado,
      cuartodeservicio, depositoocuartoutil, estudioobiblioteca,
      halldealcobasoestar, parqueaderovisitantes, porteria,
      remodelado, terraza, zonadelavanderia,
      banosprivados, banospublicos, inteligente,
      oficina, parqueindustrial,
      mesanine, tipolocal,
      tipoInmueble, metadata;
    if (this && this.state) {
      balcon = this.state.form.balcon;
      banoservicio = this.state.form.banoservicio;
      clubhouse = this.state.form.clubhouse;
      conjuntocerrado = this.state.form.conjuntocerrado;
      cuartodeservicio = this.state.form.cuartodeservicio;
      depositoocuartoutil = this.state.form.depositoocuartoutil;
      estudioobiblioteca = this.state.form.estudioobiblioteca;
      halldealcobasoestar = this.state.form.halldealcobasoestar;
      parqueaderovisitantes = this.state.form.parqueaderovisitantes;
      porteria = this.state.form.porteria;
      remodelado = this.state.form.remodelado;
      terraza = this.state.form.terraza;
      zonadelavanderia = this.state.form.zonadelavanderia;

      banosprivados = this.state.form.banosprivados;
      banospublicos = this.state.form.banospublicos;
      inteligente = this.state.form.inteligente;

      oficina = this.state.form.oficina;
      parqueindustrial = this.state.form.parqueindustrial;

      mesanine = this.state.form.mesanine;
      tipolocal = this.state.form.tipolocal;

      tipoInmueble = this.state.tipoInmueble;
      metadata = this.state.metadataForm;
    }
    if (this.state.tipoInmueble === 'Apartamento'
      || this.state.tipoInmueble === 'Casa')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.balcon.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.balcon.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidBalcon()}
                  isInvalid={!this.isValidBalcon()}
                  onChange={this.handleFormBalconChange}
                  value={balcon}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.balcon.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.banoservicio.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.banoservicio.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidBanoServicio()}
                  isInvalid={!this.isValidBanoServicio()}
                  onChange={this.handleFormBanoServicio}
                  value={banoservicio}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.banoservicio.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.clubhouse.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.clubhouse.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidClubHouse()}
                  isInvalid={!this.isValidClubHouse()}
                  onChange={this.handleFormClubHouseChange}
                  value={clubhouse}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.clubhouse.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.conjuntocerrado.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.conjuntocerrado.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidConjuntoCerrado()}
                  isInvalid={!this.isValidConjuntoCerrado()}
                  onChange={this.handleFormConjuntoCerrado}
                  value={conjuntocerrado}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.conjuntocerrado.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.cuartodeservicio.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.cuartodeservicio.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidCuartoDeServicio()}
                  isInvalid={!this.isValidCuartoDeServicio()}
                  onChange={this.handleFormCuartoDeServicio}
                  value={cuartodeservicio}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.cuartodeservicio.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.depositoocuartoutil.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.depositoocuartoutil.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidDepositooCuartoUtil()}
                  isInvalid={!this.isValidDepositooCuartoUtil()}
                  onChange={this.handleFormDepositooCuartoUtil}
                  value={depositoocuartoutil}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.depositoocuartoutil.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.estudioobiblioteca.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.estudioobiblioteca.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidEstudiooBiblioteca()}
                  isInvalid={!this.isValidEstudiooBiblioteca()}
                  onChange={this.handleFormEstudiooBiblioteca}
                  value={estudioobiblioteca}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.estudioobiblioteca.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.halldealcobasoestar.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.halldealcobasoestar.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidHallDeAlcobasoEstar()}
                  isInvalid={!this.isValidHallDeAlcobasoEstar()}
                  onChange={this.handleFormHallDeAlcobasoEstar}
                  value={halldealcobasoestar}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.halldealcobasoestar.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.parqueaderovisitantes.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.parqueaderovisitantes.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidParqueaderoVisitantes()}
                  isInvalid={!this.isValidParqueaderoVisitantes()}
                  onChange={this.handleFormParqueaderoVisitantes}
                  value={parqueaderovisitantes}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.parqueaderovisitantes.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.porteria.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.porteria.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidPorteria()}
                  isInvalid={!this.isValidPorteria()}
                  onChange={this.handleFormPorteria}
                  value={porteria}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.porteria.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.remodelado.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.remodelado.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidRemodelado()}
                  isInvalid={!this.isValidRemodelado()}
                  onChange={this.handleFormRemodelado}
                  value={remodelado}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.remodelado.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.terraza.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.terraza.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidTerraza()}
                  isInvalid={!this.isValidTerraza()}
                  onChange={this.handleFormTerraza}
                  value={terraza}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.terraza.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.areaterraza.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.areaterraza.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  placeholder="Área de terraza en metros cuadrados"
                  defaultValue={this.state.form.areaterraza}
                  isValid={this.isValidAreaTerraza()}
                  isInvalid={!this.isValidAreaTerraza()}
                  onChange={this.handleFormAreaTerrazaChange}
                  min={0}
                />
                <Form.Control.Feedback type="invalid">El campo área de terraza es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.zonadelavanderia.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.zonadelavanderia.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidZonaDeLavanderia()}
                  isInvalid={!this.isValidZonaDeLavanderia()}
                  onChange={this.handleFormZonaDeLavanderia}
                  value={zonadelavanderia}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.zonadelavanderia.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Oficina')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.banosprivados.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.banosprivados.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidBanosPrivados()}
                  isInvalid={!this.isValidBanosPrivados()}
                  onChange={this.handleFormBanosPrivados}
                  value={banosprivados}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.banosprivados.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.banospublicos.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.banospublicos.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidBanosPublicos()}
                  isInvalid={!this.isValidBanosPublicos()}
                  onChange={this.handleFormBanosPublicos}
                  value={banospublicos}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.banospublicos.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.inteligente.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.inteligente.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidInteligente()}
                  isInvalid={!this.isValidInteligente()}
                  onChange={this.handleFormInteligente}
                  value={inteligente}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.inteligente.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.depositoocuartoutil.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.depositoocuartoutil.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidDepositooCuartoUtil()}
                  isInvalid={!this.isValidDepositooCuartoUtil()}
                  onChange={this.handleFormDepositooCuartoUtil}
                  value={depositoocuartoutil}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.depositoocuartoutil.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.parqueaderovisitantes.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.parqueaderovisitantes.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidParqueaderoVisitantes()}
                  isInvalid={!this.isValidParqueaderoVisitantes()}
                  onChange={this.handleFormParqueaderoVisitantes}
                  value={parqueaderovisitantes}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.parqueaderovisitantes.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.porteria.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.porteria.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidPorteria()}
                  isInvalid={!this.isValidPorteria()}
                  onChange={this.handleFormPorteria}
                  value={porteria}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.porteria.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.remodelado.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.remodelado.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidRemodelado()}
                  isInvalid={!this.isValidRemodelado()}
                  onChange={this.handleFormRemodelado}
                  value={remodelado}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.remodelado.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.terraza.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.terraza.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidTerraza()}
                  isInvalid={!this.isValidTerraza()}
                  onChange={this.handleFormTerraza}
                  value={terraza}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.terraza.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.areaterraza.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.areaterraza.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  placeholder="Área de terraza en metros cuadrados"
                  defaultValue={this.state.form.areaterraza}
                  isValid={this.isValidAreaTerraza()}
                  isInvalid={!this.isValidAreaTerraza()}
                  onChange={this.handleFormAreaTerrazaChange}
                  min={0}
                />
                <Form.Control.Feedback type="invalid">El campo área de terraza es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Bodega')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.oficina.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.oficina.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidOficina()}
                  isInvalid={!this.isValidOficina()}
                  onChange={this.handleFormOficinaChange}
                  value={oficina}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.oficina.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.parqueindustrial.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.parqueindustrial.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidParqueIndustrial()}
                  isInvalid={!this.isValidParqueIndustrial()}
                  onChange={this.handleFormParqueIndustrialChange}
                  value={parqueindustrial}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.parqueindustrial.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Local')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.mesanine.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.mesanine.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidMesanine()}
                  isInvalid={!this.isValidMesanine()}
                  onChange={this.handleFormMesanineChange}
                  value={mesanine}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.mesanine.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.tipolocal.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.tipolocal.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control as="select"
                  isValid={this.isValidTipoLocal()}
                  isInvalid={!this.isValidTipoLocal()}
                  onChange={this.handleFormTipoLocalChange}
                  value={tipolocal}
                >
                  <option key="" value="">Elije una opción</option>
                  {metadata.tipolocal.options.map(function (data, key) {
                    return (
                      <option key={key} value={data}>{data}</option>)
                  })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Lote')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.frente.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.frente.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  defaultValue={this.state.form.frente}
                  isValid={this.isValidFrente()}
                  isInvalid={!this.isValidFrente()}
                  onChange={this.handleFormFrenteChange}
                  min={1}
                />
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.fondo.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.fondo.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  defaultValue={this.state.form.fondo}
                  isValid={this.isValidFondo()}
                  isInvalid={!this.isValidFondo()}
                  onChange={this.handleFormFondoChange}
                  min={1}
                />
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Edificio')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
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
                <Form.Control
                  type="number"
                  defaultValue={this.state.form.garajes}
                  isValid={this.isValidGarajes()}
                  isInvalid={!this.isValidGarajes()}
                  onChange={this.handleFormGarajesChange}
                  min={1}
                />
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
                <Form.Control
                  type="number"
                  defaultValue={this.state.form.numerodeniveles}
                  isValid={this.isValidNumeroDeNiveles()}
                  isInvalid={!this.isValidNumeroDeNiveles()}
                  onChange={this.handleFormNumeroDeNivelesChange}
                  min={1}
                />
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      );
    else if (tipoInmueble === 'Finca')
      return (
        <Card className='step-container'>
          <Card.Header style={{ fontWeight: 'bold' }}>Datos de inmueble</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>{metadata.areaterreno.label}</Form.Label>
                <OverlayTrigger
                  key={'bottom'}
                  placement={'bottom'}
                  overlay={
                    <Tooltip style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                      {metadata.areaterreno.help}
                    </Tooltip>}>
                  <Button variant="outline-info" style={{ float: 'right' }}>Info</Button>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  defaultValue={this.state.form.areaterreno}
                  isValid={this.isValidAreaTerreno()}
                  isInvalid={!this.isValidAreaTerreno()}
                  onChange={this.handleFormAreaTerrenoChange}
                  min={1}
                />
                <Form.Control.Feedback type="invalid">El campo es obligatorio.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
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