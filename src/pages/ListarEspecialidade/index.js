import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarEspecialidade() {
    return (
        <div className="listarespecialidade-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/especialidade">Cadastrar Especialidade</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Especialidade</h1>
            <ul>
                <li>
                    <strong>ID:</strong>
                    <strong>Descrição Especialidade:</strong>
 
                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div >
    );
}