import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarReceita() {
    const [receita, setReceita] = useState([]);

    const idReceita = localStorage.getItem('idReceita');
    const descReceita = localStorage.getItem('descReceita');
    const dataReceita = localStorage.getItem('dataReceita');

    useEffect(() => {
        api.get('receita', {
            headers: {
                Authorization: idReceita,
            }
        }).then(Response => {
            setReceita(Response.data);
        })
    }, [idReceita]);

    async function handleDeleteReceita(idReceita) {
        try {
            await api.delete(`receita/${idReceita}`, {
                headers: {
                    Authorization: idReceita,
                }
            });
            setReceita(receita.filter(receita => receita.idReceita !== idReceita))
        } catch (err) {
            alert('Erro ao deletar receita, tente novamente.');
        }
    }

    async function handleReceita(e) {
        e.preventDefault();

        const data = {
            descReceita,
            dataReceita,
        };
        try {
            const response = await api.post('receita', data);

            alert(`O ID do seu receita ${response.data.idReqExame}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return (
        <div className="listareceita-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, Cheers</span>
                <Link className='button' to="/receita">Cadastrar Receita</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Receitas Cadastradas</h1>
            <ul>
                {receita.map(receita => (
                    <li key={receita.idReceita}>
                        <strong>Data Emissão da Receita:</strong>
                        <p>{receita.dataReceita}</p>

                        <strong>Descrição:</strong>
                        <p>{receita.descReceita}</p>

                        <strong>Consulta:</strong>
                        <p>{receita.consulta_id}</p>

                        <button onClick={() => handleDeleteReceita(receita.idReceita)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}