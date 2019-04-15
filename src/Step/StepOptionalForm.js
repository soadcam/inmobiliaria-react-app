import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

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

  isValidated() {
    
  }

  assignValuesToProp() {
    var inmobiliaria = this.props.getInmobiliaria();
    inmobiliaria.formulario = this.state.form;
    this.props.updateInmobiliaria(inmobiliaria);
  }

  render() {
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
                onChange={this.handleFormParqueaderoVisitantes}
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