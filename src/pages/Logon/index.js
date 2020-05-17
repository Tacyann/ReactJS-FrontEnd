import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';


import cheersImg from '../../assets/saude2.png';
import logoImg from "../../assets/Saude1.png";

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={cheersImg} alt="Logo" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color= "#e02041"/>
                        Não tenho cadastro!
                        </a>
                </form>
            </section>
            <img src={logoImg} alt="Cheers" />
        </div>
    );
}