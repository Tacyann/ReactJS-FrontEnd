import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Medico() {
    return (
        <div className="medico-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Médico</h1>
                </section >
                <form className="form">
                    <input placeholder="Login:" />
                    <input placeholder="Nome do Médico:" />
                    <input type="data" placeholder="CRM:" />
                    <input placeholder="Especialidade:" />

                    <button className="button" type="submit">Cadastrar</button>
                    <button className="button" type="submit">Agendar Consulta</button>
                    <button className="button" type="submit">Consultar</button>
                </form>
            </div>
        </div>
    );
}