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
                </section >
                <form className="form">
                    <input placeholder="ID" />
                    <input placeholder="Paciente" />
                    <label className="label" >Cobertura:</label>
                    <select className="dropdown">
                    </select>
                    <label className="label">Escolha uma data:</label>
                    <input type="date" />
                    <label className="label" >Especialidade:</label>
                    <select className="dropdown">
                    </select>
                    <label className="label">Médico:</label>
                    <select className="dropdown">
                    </select>
                            <button className="button" type="submit">Confirmar Agendamento</button>
                            <button className="button" type="submit">Listar</button>
                            <button className="button" type="submit">Editar</button>
                            <button className="button" type="submit">Excluir</button>
                            <Link className="black-link" to="/">
                                <FiArrowLeft size={18} color="#e02041" />
                        Voltar
                        </Link>
                </form>
            </div>
        </div>
    );
}
