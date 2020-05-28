import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Consulta() {
    return (
        <div className="consulta-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/consultas/new">Cadastrar Consulta</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Consultas Cadastradas</h1>
            <ul>
                <li>
                <strong>CONSULTA</strong>
                    <br/>
                    <strong>Cobertura:</strong>
                    <input type="radio" />
                    

                    <strong>Escolha uma data:</strong>
                    <label className="label" />
                    <input type="date" />
                    <br />

                    <strong>Especialidade:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <strong>Médico:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CONSULTA</strong>
                    <br/>
                    <strong>Cobertura:</strong>
                    <select className="dropdown" />

                    <strong>Escolha uma data:</strong>
                    <label className="label" />
                    <input type="date" />
                    <br />

                    <strong>Especialidade:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <strong>Médico:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CONSULTA</strong>
                    <br/>
                    <strong>Cobertura:</strong>
                    <select className="dropdown" />

                    <strong>Escolha uma data:</strong>
                    <label className="label" />
                    <input type="date" />
                    <br />

                    <strong>Especialidade:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <strong>Médico:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CONSULTA</strong>
                    <br/>
                    <strong>Cobertura:</strong>
                    <select className="dropdown" />

                    <strong>Escolha uma data:</strong>
                    <label className="label" />
                    <input type="date" />
                    <br />

                    <strong>Especialidade:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <strong>Médico:</strong>
                    <label className="label" />
                    <select className="dropdown" />

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div >
    );
}