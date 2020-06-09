import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function Exame() {

    const[descCobertura, setdescCobertura] = useState('');

    async function handleCobertura(e) {
        e.preventDefault();

        const data = {
            descCobertura
        };

        try{
            const response = await api.post('cobertura', data);

            alert(`O ID da sua cobertura ${response.data.idCobertura}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }      
    }

    return (
        <div className="cobertura-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cobertura</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                   
                </section >
                <form onSubmit={handleCobertura}>
                    <input placeholder="Descrição da Coberura"
                    value={descCobertura}
                    onChange={e => setdescCobertura(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarcobertura">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}