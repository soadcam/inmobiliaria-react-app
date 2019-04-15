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
      metadataForm: inmobiliaria.metadataForm
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
    modifiedForm.areaterraza = e.target.value;
    this.setState({ form: modifiedForm });
  }

  handleFormZonaDeLavanderia = (e) => {
    var modifiedForm = this.state.form;
    modifiedForm.zonadelavanderia = e.target.value;
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

  isValidated() {
    let isValid = this.isValidBalcon()
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
      metadata;
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

      metadata = this.props.getInmobiliaria().metadataForm;
      debugger
    }
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
            </Form.Group>
          </Form.Row>
        </Card.Body>
      </Card>
    );
  }
}