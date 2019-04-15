import React, { Component } from 'react';

import StepZilla from "react-stepzilla";

import StepLocation from './StepLocation'
import StepMapPosition from './StepMapPosition'
import StepPrincipalForm from './StepPrincipalForm'
import StepOptionalForm from './StepOptionalForm'
import StepCertificate from './StepCertificate'

import './Step.css';

class StepManager extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.simpleInmobiliaria = {
            readyToStep: 1,
            location: {
                tipoinmueble: 'Apartamento',
                dpto_ccdgo: '11',
                mpio_ccdgo: '11001',
                direccion: 'Carrera+19a+103a+62',
                direccion_formato: 'Carrera 19A 103A 62',
                markers: [
                    {
                        name: "Posición actual",
                        position: {
                            lat: 4.676559438119609,
                            lng: -74.05745403289797
                        }
                    }
                ]
            },
            formulario: {
                entrada: 'formulario',
                test: true,
                direccion: '',
                direccion_formato: '',
                dpto_ccdgo: '',
                mpio_ccdgo: '',
                latitud: 0,
                longitud: 0,
                tipoinmueble: '',
                numerodepiso: 0,
                garajes: -1,
                estrato: 0,
                habitaciones: 0,
                banos: 0,
                area: 0,
                tiempodeconstruido: '',
                halldealcobasoestar: '',
                conjuntocerrado: '',
                balcon: '',
                banoservicio: '',
                numeroascensores: -1,
                saloncomunal: '',
                zonadelavanderia: '',
                estudioobiblioteca: '',
                cuartodeservicio: '',
                numerodeniveles: -1,
                terraza: '',
                areaterraza: 0,
                vista: '',
                depositoocuartoutil: '',
                remodelado: '',
                clubhouse: '',
                porteria: '',
                parqueaderovisitantes: '',
            }
        };
    }

    getInmobiliaria() {
        return this.simpleInmobiliaria;
    }

    updateInmobiliaria(update) {
        this.simpleInmobiliaria = update;
    }

    render() {
        const steps =
            [
                { name: 'Locación', component: <StepLocation getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Locación', component: <StepMapPosition getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Datos principales de inmueble', component: <StepPrincipalForm getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Datos complementarios de inmueble', component: <StepOptionalForm getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Certificado', component: <StepCertificate getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
            ]
        return (
            <div className='step-progress'>
                <StepZilla 
                    steps={steps}
                    preventEnterSubmission={true}
                    backButtonText="Anterior"
                    nextButtonText="Siguiente"
                     />
            </div>
        );
    }
}

export default StepManager;
