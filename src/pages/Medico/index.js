import React, { useState } from 'react';
//import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
//import {descEspecialidade } from '../../pages/Especialidade';

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Medico() {

    const [nomeMedico, setNomemedico] = useState('');
    const [CRM, setCRM] = useState('');
    const [descEspecialidade, setDescspecialidade] = useState('');
/*
    async function consultaEspecialidade() {
        const response = await api.get('especialidade');
        console.log(response);
        
        if (response.data) {
            response.data.map(especialidade => {
                return {
                    value: especialidade.descEspecialidade,
                    label: especialidade.descEspecialidade,
                }
            })
        }
        return [];
    }
}*/
    async function handleMedico(e) {
        e.preventDefault();

        const data = {
            nomeMedico,
            CRM,
            descEspecialidade,
        };
        try {
            const response = await api.post('medico', data);
            alert(`O ID médico: ${response.data.idMedico}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="medico-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Médico</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>

                </section >
                <form onSubmit={handleMedico}>
                    <input placeholder="Nome do Médico"
                        value={nomeMedico}
                        onChange={e => setNomemedico(e.target.value)}
                    />
                    <input type="data" placeholder="CRM"
                        value={CRM}
                        onChange={e => setCRM(e.target.value)}
                    />

                    <input placeholder="Especialidade"
                    value={descEspecialidade}
                    onChange={e => setDescspecialidade(e.target.value)}
                    />
            
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarmedico">Listar</Link>
                </form>
            </div>
        </div>
    );
}