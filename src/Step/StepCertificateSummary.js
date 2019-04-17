import React, { Component } from 'react';
import { Form, Col, Card } from 'react-bootstrap';

export default class StepCertificateSumary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            metadataForm: this.props.metadataForm,
            form: this.props.form,
        };
    }

    render() {
        if (this && this.state) {
            let form = this.state.form;
            let metadataForm = this.state.metadataForm;
            let counter = 0;
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de resumen</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                {Object.keys(metadataForm).forEach(field => {
                                    debugger
                                    return (
                                        <Form.Group as={Col} md="6">
                                            <Form.Label><b>{metadataForm[field].label}</b></Form.Label>
                                            <br />
                                            <Form.Label>{form[field]}</Form.Label>
                                        </Form.Group>
                                    )
                                })}
                            </Form.Row>
                            {/* <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>{metadata.area.label}</Form.Label>
                                    <br />
                                    <Form.Label>{metadata.area.label}</Form.Label>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>{metadata.area.label}</Form.Label>
                                    <br />
                                    <Form.Label>{metadata.area.label}</Form.Label>
                                </Form.Group>
                            </Form.Row> */}
                        </Form>
                    </Card.Body>
                </Card>
            );
        }
        return null;
    }
}