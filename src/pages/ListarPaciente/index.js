import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
//import { FcEditImage, FcCellPhone, FcCalendar, FcHome, FcBusinessman } from 'react-icons/fc';
//import { TiDocument, TiSortNumerically, TiClipboard } from "react-icons/ti";

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarPaciente() {
    const [paciente, setPaciente] = useState([]);

    const idPaciente = localStorage.getItem('idPaciente');
    const nomePaciente = localStorage.getItem('nomePaciente');

    useEffect(() => {
        api.get('paciente', {
            headers: {
                Authorization: idPaciente,
            }
        }).then(Response => {
            setPaciente(Response.data);
        })
    }, [idPaciente]);

    async function handleDeletePaciente(idPaciente){
        try{
            await api.delete(`paciente/${idPaciente}`,{
                headers: {
                    Authorization: idPaciente,
                }  
            });
            setPaciente(paciente.filter(pacientes => paciente.idPaciente !== idPaciente))
        }catch (err){
            alert('Erro ao deletar paciente, tente novamente.');
        }
    }

    return (
        <div className="listarpaciente-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, {nomePaciente}</span>
                <Link className='button' to="/paciente">Cadastrar Pacientes</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Pacientes Cadastrados</h1>
            <ul>
                {paciente.map(paciente => (
                    <li key={paciente.idPaciente}>
                        <strong>Nome do Paciente:</strong>
                        <p>{paciente.nomePaciente}</p>

                        <strong>Data de Nascimento:</strong>
                        <p>{paciente.datNascimento}</p>

                        <strong>Telefone:</strong>
                        <p>{paciente.telPaciente}</p>

                        <strong>RG:</strong>
                        <p>{paciente.RGPaciente}</p>

                        <strong>CPF:</strong>
                        <p>{paciente.CPFPaciente}</p>

                        <strong>Rua:</strong>
                        <p>{paciente.ruaPaciente}</p>

                        <strong>Bairro:</strong>
                        <p>{paciente.bairro}</p>

                        <strong>Número:</strong>
                        <p>{paciente.numPaciente}</p>

                        <button onClick={()=>handleDeletePaciente(paciente.idPaciente)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}