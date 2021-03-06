import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import cheersImg from '../../assets/saude2.png';


export default function Register() {
    return (
        <div className="register-container">
            <div className="content" >
                <section className="p">
                    <img src={cheersImg} alt="Logo" />
                </section>
                <form className="form">
                    <h1>Cadastro</h1>
                    <Link className='button' to="/especialidade">Especialidade</Link>
                    <Link className='button' to="/medico">Médico</Link>
                    <Link className='button' to="/paciente">Paciente</Link>
                    <Link className='button' to="/cobertura">Cobertura</Link>
                    <Link className='button' to="/consultas/new">Agendar Consulta</Link>
                    <Link className='button' to="/receita">Receita Medica</Link>
                    <Link className='button' to="/requisicao">Requisição de Exame</Link>
                    <Link className='button' to="/formaspagamento">Formas De Pagamento</Link>
                    <Link className='button' to="/pagamento">Pagamento</Link>
                    <Link className="black-link" to="/">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar para Home.
                        </Link>
                </form>
            </div>
        </div>
    );
}