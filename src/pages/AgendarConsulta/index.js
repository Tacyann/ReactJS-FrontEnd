import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Select from 'react-select';

import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';
import { Radio, Label } from 'semantic-ui-react';
import Cobertura from '../Cobertura';

export default function AgendarConsulta() {

    const [consulta, setConsulta] = useState('');
    const [dataConsulta, setdataConsulta] = useState('');

    const [especialidade_id, setEspecialidadeID] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const [medico_id, setMedicoID] = useState(null);
    const [medicos, setMedicos] = useState([]);
    const [paciente_id, setPacienteID] = useState(null);
    const [pacientes, setPacientes] = useState([]);
    const [idCobertura, setCoberturaID] = useState(null);
    const [coberturas, setCoberturas] = useState([]);
    const [idFomasPagamento, setFormasID] = useState(null);
    const [formas, setFormas] = useState([]);

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

    async function consultaMedico() {
        const response = await api.get('medico');
        if (response.data) {
            return response.data.map(medico => {
                return {
                    value: medico.idMedico,
                    label: medico.nomeMedico,
                }
            });
        }
        return [];
    }

    async function consultaCobertura() {
        const response = await api.get('cobertura');
        if (response.data) {
            return response.data.map(cobertura => {
                return {
                    value: cobertura.idCobertura,
                    label: cobertura.descCobertura,
                }
            });
        }
        return [];
    }

    async function consultaForma() {
        const response = await api.get('formas');
        if (response.data) {
            return response.data.map(formas => {
                return {
                    value: formas.idFomasPagamento,
                    label: formas.descFormasPagamento,
                }
            });
        }
        return [];
    }

    useEffect(async () => {
        setEspecialidades(await consultaEspecialidade())
    }, [])

    useEffect(async () => {
        setMedicos(await consultaMedico())
    }, [])

    useEffect(async () => {
        setCoberturas(await consultaCobertura())
    }, [])

    useEffect(async () => {
        setFormas(await consultaForma())
    }, [])

    async function handleAgendarConsulta(e) {
        e.preventDefault();

        const data = {
            dataConsulta,
            medico_id,
            paciente_id,
        };
        try {
            const response = await api.post('consulta', data);
            alert(`O ID Agendamento: ${response.data.idConulta}`);
        } catch (err) {
            alert('Erro no agendamento, tente novamente.');
        }
    }

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
                    <input placeholder="Nome do Paciente"
                        value={pacientes.nomePaciente}
                        onChange={e => setPacientes(e.target.value)}
                    />
                    <label className="label">Escolha uma data:</label>
                    <input type="date" placeholder="Data da Consulta:"
                        value={dataConsulta}
                        onChange={e => setdataConsulta(e.target.value)}
                    />
                    <label/> Informe a Especialidade:
                    <Select
                        options={especialidades}
                        onChange={e => setEspecialidadeID(e.value)} />
                    <label/> Selecione o Médico:
                    <Select
                        options={medicos}
                        onChange={e => setMedicoID(e.value)} />
                    <label/> Cobertura: 
                    <Select
                        options={coberturas}
                        onChange={e => setMedicoID(e.value)} />
                    <label/> Escolha a Forma de Pagamento:
                        <Select
                        options={formas}
                        onChange={e => setMedicoID(e.value)} />
     
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/consulta">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}
