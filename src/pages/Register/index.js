import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import userImg from '../../assets/AddUser.png';
import cheersImg from '../../assets/saude2.png';
import logoImg from "../../assets/Saude1.png";

export default function Register() {
    return (
        <div className="register-container">
            <div className="content" >
                <section className="p">
                    <img src={cheersImg} alt="Logo" />
                </section>
                <form className="form">
                    <h1>Cadastro</h1>
                    <button className="button" type="submit">Médico</button>
                    <button className="button" type="submit">Paciente</button>

                    <Link className="black-link" to="/">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar para Logon
                        </Link>
                </form>
            </div>
        </div>
    );
}