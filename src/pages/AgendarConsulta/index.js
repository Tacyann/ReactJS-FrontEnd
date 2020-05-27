import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';


import cheersImg from '../../assets/saude2.png';

export default function AgendarConsulta() {
    return (
        <div className="agendarconsulta-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Agendar Consulta</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form className="form">
                    <input placeholder="ID" />
                    <input placeholder="Paciente" />
                    <label className="label" >Cobertura:</label>
                    <select className="dropdown">
                    </select>
                    <label className="label">Escolha uma data:</label>
                    <input type="date" />
                    <label className="label">Especialidade:</label>
                    <select className="dropdown">
                    </select>
                    <label className="label">Médico:</label>
                    <select className="dropdown">
                    </select>
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/consulta">Consulta</Link>

                </form>
            </div>
        </div>
    );
}
