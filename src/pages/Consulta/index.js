import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Medico() {
    return (
        <div className="medico-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Consultar</h1>
                </section >
                <form className="form">
                <input placeholder="Login:" />
                    <button className="button" type="submit">Consultar</button>
                </form>
            </div>
        </div>
    );
}