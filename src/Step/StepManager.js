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

        this.initInmobiliaria = {
            readyToStep: 1,
            location: {
                tipoinmueble: '',
                dpto_ccdgo: '',
                mpio_ccdgo: '',
                direccion: '',
                direccion_formato: '',
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
                test: false,
                //test: true,
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
                banosprivados: '',
                banospublicos: '',
                inteligente: '',
                altura: '',
                oficina: '',
                parqueindustrial: '',
                mesanine: '',
                tipolocal: '',
                frente: 0,
                fondo: 0,
                uso: '',
                areaterreno: 0,
            },
            reporte: {
                forecast: {
                    venta: {
                        valor_maximo: 0,
                        valor_minimo: 0,
                    },
                    arriendo: {
                        valor_maximo: 0,
                        valor_minimo: 0,
                    }
                },
            }
        };
        this.cleanInmobiliaria();
    }

    getInmobiliaria() {
        return this.simpleInmobiliaria;
    }

    updateInmobiliaria(update) {
        this.simpleInmobiliaria = update;
    }

    cleanInmobiliaria() {
        this.simpleInmobiliaria = JSON.parse(JSON.stringify(this.initInmobiliaria));
    }

    render() {
        const steps =
            [
                { name: 'Locación', component: <StepLocation getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} cleanInmobiliaria={() => (this.cleanInmobiliaria())}/> },
                { name: 'Ubicación', component: <StepMapPosition getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Datos principales de inmueble', component: <StepPrincipalForm getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Datos complementarios de inmueble', component: <StepOptionalForm getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
                { name: 'Reporte', component: <StepCertificate getInmobiliaria={() => (this.getInmobiliaria())} updateInmobiliaria={(u) => { this.updateInmobiliaria(u) }} /> },
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
