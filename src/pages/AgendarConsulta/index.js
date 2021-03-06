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

    const [dataConsulta, setdataConsulta] = useState('');

    const [medico_id, setMedicoID] = useState(null);
    const [medicos, setMedicos] = useState([]);
    const [paciente_id, setPacienteID] = useState(null);
    const [valorTotal, setValorTotal] = useState(null);
    const [paciente, setPaciente] = useState([]);
    const [idCobertura, setCoberturaID] = useState(null);
    const [coberturas, setCoberturas] = useState([]);
    const [idFomasPagamento, setFormasID] = useState(null);
    const [formas, setFormas] = useState([]);
    const [tipoConsulta, setTipoConsulta] = useState(null);

    const opcoes = [{ value: 'PLANO', label: 'PLANO' },
    { value: 'PARTICULAR', label: 'PARTICULAR' }]

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
        setMedicos(await consultaMedico())
        setCoberturas(await consultaCobertura())
        setFormas(await consultaForma())
    }, [])

    async function handleAgendarConsulta(e) {
        e.preventDefault();

        const data = {
            dataConsulta,
            medico_id,
            paciente_id,
            cobertura_id: idCobertura,
            forma_id: idFomasPagamento
        };
        try {
            const response = await api.post('consulta', data);
            alert(`O ID Agendamento: ${response.data.idConsulta}`);
        } catch (err) {
            alert('Erro no agendamento, tente novamente.');
        }
    }

    async function selecionarPaciente(id) {
        const response = await api.get(`paciente/${id}`);
        if (response.data) {
            setPaciente(response.data.nomePaciente)
        }
        setPacienteID(id);
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
                <form className="form" onSubmit={handleAgendarConsulta}>
                    <label className="label">Informe o ID do Paciente:</label>
                    <input placeholder="ID do Paciente"
                        value={paciente_id}
                        onChange={e => selecionarPaciente(e.target.value)}
                    />
                    <label className="label">Nome do Paciente:</label>
                    <input placeholder="Nome do Paciente"
                        value={paciente}
                        readOnly={true}
                    />
                    <label className="label">Escolha uma data:</label>
                    <input type="date" placeholder="Data da Consulta:"
                        value={dataConsulta}
                        onChange={e => setdataConsulta(e.target.value)}
                    />

                    Selecione o Médico:
                    <Select
                        options={medicos}
                        onChange={e => setMedicoID(e.value)} />
                    <label />

                    Tipo de consulta:
                    <Select
                        options={opcoes}
                        onChange={e => setTipoConsulta(e.value)} />

                    {(tipoConsulta === 'PLANO') && <label className="label">Cobertura:</label>}
                    {(tipoConsulta === 'PLANO') &&
                        <Select
                            options={coberturas}
                            onChange={e => setCoberturaID(e.value)} />}

                    {(tipoConsulta === 'PARTICULAR') && <label className="label">Escolha a Forma de Pagamento:</label>}
                    {(tipoConsulta === 'PARTICULAR') &&
                        <Select
                            options={formas}
                            onChange={e => setFormasID(e.value)} />}

                    {(tipoConsulta === 'PARTICULAR') && <label className="label">Valor Total:</label>}
                    {(tipoConsulta === 'PARTICULAR') &&
                        <input placeholder="Valor Total"
                            value={valorTotal}
                            onChange={e => setValorTotal(e.target.value)}
                        />}

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/agendar">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}
