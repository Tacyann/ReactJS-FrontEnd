import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Especialidade() {

    const[descEspecialidade, setDescespecialidade] = useState('');

    async function handleEspecialidade(e) {
        e.preventDefault();

        const data = {
            descEspecialidade
        };

        try{
            const response = await api.post('especialidade', data);

            alert(`O ID da sua especialidade: ${response.data.idEspecialidade}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }      
    }

    return (
        <div className="especialidade-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Especialidade</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>

                </section >
                <form onSubmit={handleEspecialidade}>

                    <input placeholder="Descrição da Especialidade" 
                    value={descEspecialidade}
                    onChange={e => setDescespecialidade(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarmedico">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}