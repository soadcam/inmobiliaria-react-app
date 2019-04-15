import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

export default class StepCertificate extends Component {
    constructor(props) {
        super(props);

    }

    isValidated() {

    }

    render() {
        if (this && this.state.readyToStep !== 5) {
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
        return (
            <Card className='step-container'>
                <Card.Header style={{ fontWeight: 'bold' }}>Certificado</Card.Header>
                <Card.Body></Card.Body>
            </Card>
        );
    }
}