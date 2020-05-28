import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function FormaDePagamento() {
    return (
        <div className="especialidade-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Formas de Pagamento</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                   
                </section >
                <form className="form">
                    <input placeholder="Descrição Pagamento" />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarformas">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}