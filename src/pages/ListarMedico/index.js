import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarMedico() {
    return (
        <div className="listarmedico-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/medico">Cadastrar Médicos</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Médicos</h1>
            <ul>
                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Médico:</strong>

                    <strong>CRM:</strong>

                    <strong>Especialidade:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Médico:</strong>

                    <strong>CRM:</strong>

                    <strong>Especialidade:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Médico:</strong>

                    <strong>CRM:</strong>

                    <strong>Especialidade:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Médico:</strong>

                    <strong>CRM:</strong>

                    <strong>Especialidade:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

            </ul>
        </div >
    );
}