import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Medico() {
    return (
        <div className="medico-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Médico</h1>
                    <Link className="black-link" to="/">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar para Home.
                        </Link>
                    
                </section >
                <form className="form">
                    <input placeholder="Nome do Médico" />
                    <input type="data" placeholder="CRM" />

                    <label className="label" >Especialidade:</label>
                    <select className="dropdown">

                    </select>

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarmedico">Listar</Link>
                </form>
            </div>
        </div>
    );
}