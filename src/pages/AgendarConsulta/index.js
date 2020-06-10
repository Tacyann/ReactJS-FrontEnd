import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Select from 'react-select';

import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';
import { Radio } from 'semantic-ui-react';

export default function AgendarConsulta() {

    const [consulta, setConsulta] = useState('');
    const [dataConsulta, setdataConsulta] = useState('');

    const [especialidade_id, setEspecialidadeID] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const [medico_id, setMedicoID] = useState(null);
    const [medicos, setMedicos] = useState([]);
    const [paciente_id, setPacienteID] = useState(null);
    const [pacientes, setPacientes] = useState([]);

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
                    <Select
                        options={especialidades}
                        onChange={e => setEspecialidadeID(e.value)} />
                    <input placeholder="Nome do Médico"
                        value={medicos.nomeMedico}
                        onChange={e => setPacientes(e.target.value)}
                    />
                    <Radio /> Cobertura 
                    <Radio /> Particular 
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/consulta">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}
