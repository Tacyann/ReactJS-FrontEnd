import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';


import cheersImg from '../../assets/saude2.png';


export default function Paciente() {
    return (
        <div className="paciente-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Paciente</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form className="form">
                    <input placeholder="Nome do Paciente" />
                    <input type="date" placeholder="Data de Nascimento" />
                    <input placeholder="Telefone" />
                    <input placeholder="RG" />
                    <input placeholder="CPF" />

                    <div className="input-group">
                        <input placeholder="Rua" />
                        <input placeholder="Bairro" />
                        <input placeholder="Num" style={{ width: 100 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarpaciente">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                    
                </form>
            </div>
        </div>
    );
}