import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarMedico() {
    const [medico, setMedico] = useState([]);

    const idMedico = localStorage.getItem('idMedico');
    const nomeMedico = localStorage.getItem('nomeMedico');
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

    useEffect(() => {
        api.get('medico', {
            headers: {
                Authorization: idMedico,
            }
        }).then(Response => {
            setMedico(Response.data);
        })
    }, [idMedico]);

    async function handleDeleteMedico(idMedico){
        try{
            await api.delete(`medico/${idMedico}`,{
                headers: {
                    Authorization: idMedico,
                }  
            });
        setMedico(medico.filter(medico => medico.idMedico !== idMedico))
        }catch (err){
            alert('Erro ao deletar medico, tente novamente.');
        }
    }

    return (
        <div className="listarmedico-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/medico">Cadastrar Médico</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Médicos</h1>
            <ul>
            {medico.map(medico => ( 
                <li key={medico.idMedico}>
                    <strong>Nome do Médico:</strong>
                    <p>{medico.nomeMedico}</p>

                    <strong>CRM:</strong>
                    <p>{medico.CRM}</p>

                    <strong>IdEspecialidade:</strong>
                    <p>{medico.especialidade_id}</p>

                    <button type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            ))}
            </ul>
        </div >
    );
}