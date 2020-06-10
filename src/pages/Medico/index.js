import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Medico() {

    const [nomeMedico, setNomemedico] = useState('');
    const [CRM, setCRM] = useState('');
    const [especialidade_id, setEspecialidadeID] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);

    async function consultaEspecialidade() {
        const response = await api.get('especialidade');
        if (response.data) {
            return response.data.map(especialidade => {
                return {
                    value: especialidade.idEspecialidade,
                    label: especialidade.descEspecialidade,
                }
            });
        }
        return [];
    }

    useEffect(async () => {
        setEspecialidades(await consultaEspecialidade())
    }, [])
    
    async function handleMedico(e) {
        e.preventDefault();

        const data = {
            nomeMedico,
            CRM,
            especialidade_id,
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

                    <Select 
                        options={especialidades}
                        onChange={e => setEspecialidadeID(e.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/especialidade">Cadastrar Especialidade</Link>
                    <Link className='button' to="/listarmedico">Listar</Link>
                </form>
            </div>
        </div>
    );
}