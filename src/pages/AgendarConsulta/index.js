import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Select from 'react-select';
import { Form, Radio } from 'semantic-ui-react'

import './styles.css';


import cheersImg from '../../assets/saude2.png';

export default function AgendarConsulta() {

    const options = [
        { value: ' ', label: ' ' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
    ]

    const MyComponent = () => (
        <Select options={options} />
    )


    async function handleOptionChange(changeEvent) {
        //e.preventDefault();
        this.setState({
            selectedOption: changeEvent.target.value
        });

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
                    <input placeholder="Nome do Paciente" />
                    <label className="label">Escolha uma data:</label>
                    <input type="date" />
                    <input placeholder="Escolha à Especialidade" />
                    <input placeholder="Informe o nome do Médico" />
                    <label className="label">Cobertura</label>
                    <input type="checkbox"/>
                    <input placeholder="Informe a cobertura" />
                    <label className="label">Particular</label>
                    <input type="checkbox" height="30" width="30"/>
                    <input placeholder="Valor" />
                    <Select options={options}>Quantidade</Select>
                    <label className="label">Data do Pagamento:</label>
                    <input type="date" />
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/consulta">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}
