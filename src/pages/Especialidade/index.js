import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Especialidade() {
    return (
        <div className="especialidade-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Especialidade</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                   
                </section >
                <form className="form">
                    <input placeholder="Descrição da Especialidade" />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarmedico">Listar</Link>
                </form>
            </div>
        </div>
    );
}