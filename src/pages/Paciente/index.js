import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';


export default function Paciente() {

    const [nomePaciente, setNomepaciente] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');
    const [RG, setRG] = useState('');
    const [CPF, setCPF] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [num, setNum] = useState('');


    async function handlePaciente(e) {
        e.preventDefault();

        const data = {
            nomePaciente,
            data,
            telefone,
            RG,
            CPF,
            rua,
            bairro,
            num,

        };
        try {
            const response = await api.post('paciente', data);
            alert(`O ID Paciente: ${response.data.idPaciente}`);
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
                    value={data}
                    onChange={e => setData(e.target.value)}
                    />
                    <input placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <input placeholder="RG"
                    value={RG}
                    onChange={e => setRG(e.target.value)}
                    />
                    <input placeholder="CPF"
                    value={CPF}
                    onChange={e => setCPF(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Rua"
                        value={rua}
                        onChange={e => setRua(e.target.value)}
                        />
                        <input placeholder="Bairro" 
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                        />
                        <input placeholder="Num" style={{ width: 100 }}
                        value={num}
                        onChange={e => setNum(e.target.value)}
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