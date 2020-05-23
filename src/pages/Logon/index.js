import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';


import cheersImg from '../../assets/saude2.png';
import logoImg from "../../assets/Saude1.png";

export default function Logon() {
    return (
        <div className="logon-container">
            <section>
                <img src={cheersImg} alt="Logo" />

                <form className="form">
                    <h1>Login</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="black-link" to="/register">
                        <FiLogIn size={18} color= "#e02041"/>
                        Não tenho cadastro!
                        </Link>
                </form>
            </section>
        </div>
    );
}