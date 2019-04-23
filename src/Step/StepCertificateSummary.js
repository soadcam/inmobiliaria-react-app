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
            return (
                <Card className='step-container'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de resumen</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                {Object.keys(metadataForm).map(function (data, key) {
                                    return (
                                        <Form.Group as={Col} md="4">
                                            <Form.Label><b>{metadataForm[data].label}</b></Form.Label>
                                            <br />
                                            <Form.Label>{form[data]}</Form.Label>
                                        </Form.Group>
                                    )
                                })}
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            );
        }
        return null;
    }
}