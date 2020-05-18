import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


import cheersImg from '../../assets/saude2.png';
import logoImg from "../../assets/Saude1.png";

export default function Paciente() {
    return (
        <div className="paciente-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Paciente</h1>
                </section >
                <form className="form">
                    <input placeholder="Login:" />
                    <input placeholder="Nome do Paciente:" />
                    <input type="data" placeholder="Data de Nascimento:" />
                    <input placeholder="Telefone:" />
                    <input placeholder="RG:" />
                    <input placeholder="CPF:" />

                    <div className="input-group">
                        <input placeholder="Rua:" />
                        <input placeholder="Bairro:" />
                        <input placeholder="Número:" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <button className="button" type="submit">Agendar Consulta</button>
                    <button className="button" type="submit">Consultar</button>
                </form>
            </div>
        </div>
    );
}