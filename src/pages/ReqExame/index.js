import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';


import cheersImg from '../../assets/saude2.png';


export default function ReqExame() {
    return (
        <div className="requisicao-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Requisição de Exame</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form className="form">
                    <input placeholder="Descrição da Requisição do Exame" />
                    <input type="date" placeholder="Data da Requisição" />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarpaciente">Listar</Link>
                </form>
            </div>
        </div>
    );
}