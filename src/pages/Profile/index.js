import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import cheersImg from '../../assets/saude2.png';


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="content" >
                <section className="p">
                    <img src={cheersImg} alt="Logo" />
                </section>
                <form className="form">
                    <h1>Cadastro</h1>
                    <Link className='button' to="/medico">Médico</Link>
                    <Link className='button' to="/paciente">Paciente</Link>
                    <Link className="black-link" to="/">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar para Home.
                        </Link>
                </form>
            </div>
        </div>
    );
}