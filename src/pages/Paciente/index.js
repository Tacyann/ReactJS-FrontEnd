import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';

export default function Paciente() {

    const [nomePaciente, setNomepaciente] = useState('');
    const [datNascimento, setdatNascimento] = useState('');
    const [telPaciente, setTelefone] = useState('');
    const [RGPaciente, setRGPaciente] = useState('');
    const [CPFPaciente, setCPFPaciente] = useState('');
    const [ruaPaciente, setruaPaciente] = useState('');
    const [bairro, setbairro] = useState('');
    const [numPaciente, setnumPaciente] = useState('');

    const history = useHistory();

    async function handlePaciente(e) {
        e.preventDefault();

        const data = {
            nomePaciente,
            datNascimento,
            telPaciente,
            RGPaciente,
            CPFPaciente,
            ruaPaciente,
            bairro,
            numPaciente,

        };
        try {
            const response = await api.post('paciente', data);
            alert(`Seu  ID de acesso: ${response.data.idPaciente}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="paciente-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Paciente</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form onSubmit={handlePaciente}>
                    <input placeholder="Nome do Paciente" 
                    value={nomePaciente}
                    onChange={e => setNomepaciente(e.target.value)}
                    />
                    <input type="date" placeholder="Data de Nascimento:" 
                    value={datNascimento}
                    onChange={e => setdatNascimento(e.target.value)}
                    />
                    <input placeholder="Telefone"
                    value={telPaciente}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <input placeholder="RG"
                    value={RGPaciente}
                    onChange={e => setRGPaciente(e.target.value)}
                    />
                    <input placeholder="CPF"
                    value={CPFPaciente}
                    onChange={e => setCPFPaciente(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Rua"
                        value={ruaPaciente}
                        onChange={e => setruaPaciente(e.target.value)}
                        />
                        <input placeholder="Bairro" 
                        value={bairro}
                        onChange={e => setbairro(e.target.value)}
                        />
                        <input placeholder="Num" style={{ width: 100 }}
                        value={numPaciente}
                        onChange={e => setnumPaciente(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarpaciente">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                    
                </form>
            </div>
        </div>
    );
}