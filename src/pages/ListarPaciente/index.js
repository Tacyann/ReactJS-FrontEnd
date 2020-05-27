import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarPaciente() {
    return (
        <div className="listarpaciente-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/paciente">Cadastrar Pacientes</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Pacientes</h1>
            <ul>
                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Paciente:</strong>
                    <strong>Data de Aniversário:</strong>
                    <strong>Telefone:</strong>
                    <strong>RG:</strong>
                    <strong>CPF:</strong>
                    <strong>Rua:</strong>
                    <strong>Bairro:</strong>
                    <strong>Número:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Paciente:</strong>
                    <strong>Data de Aniversário:</strong>
                    <strong>Telefone:</strong>
                    <strong>RG:</strong>
                    <strong>CPF:</strong>
                    <strong>Rua:</strong>
                    <strong>Bairro:</strong>
                    <strong>Número:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Paciente:</strong>
                    <strong>Data de Aniversário:</strong>
                    <strong>Telefone:</strong>
                    <strong>RG:</strong>
                    <strong>CPF:</strong>
                    <strong>Rua:</strong>
                    <strong>Bairro:</strong>
                    <strong>Número:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>ID:</strong>
                    <strong>Nome do Paciente:</strong>
                    <strong>Data de Aniversário:</strong>
                    <strong>Telefone:</strong>
                    <strong>RG:</strong>
                    <strong>CPF:</strong>
                    <strong>Rua:</strong>
                    <strong>Bairro:</strong>
                    <strong>Número:</strong>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

            </ul>
        </div >
    );
}