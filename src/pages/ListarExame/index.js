import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarExame() {
    const [exame, setExame] = useState([]);

    const idReqExame = localStorage.getItem('idReqExame');
    const descReqExame = localStorage.getItem('descReqExame');
    const dataReqExame = localStorage.getItem('dataReqExame');


    useEffect(() => {
        api.get('exame', {
            headers: {
                Authorization: idReqExame,
            }
        }).then(Response => {
            setExame(Response.data);
        })
    }, [idReqExame]);

    async function handleDeleteExame(idReqExamed) {
        try {
            await api.delete(`exame/${idReqExame}`, {
                headers: {
                    Authorization: idReqExame,
                }
            });
            setExame(exame.filter(pacientes => exame.idReqExame !== idReqExame))
        } catch (err) {
            alert('Erro ao deletar exame, tente novamente.');
        }
    }

    async function handleExame(e) {
        e.preventDefault();

        const data = {
            descReqExame,
            dataReqExame,
        };

        try {
            const response = await api.post('exame', data);

            alert(`O ID do seu exame ${response.data.idReqExame}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return (
        <div className="listarexame-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, Cheers</span>
                <Link className='button' to="/exame">Cadastrar Exame</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Exames Cadastrados</h1>
            <ul>
                {exame.map(exame => (
                    <li key={exame.idReqExame}>
                        <strong>Data do Exame:</strong>
                        <p>{exame.dataReqExame}</p>

                        <strong>Descrição:</strong>
                        <p>{exame.descReqExame}</p>

                        <strong>Consulta:</strong>
                        <p>{exame.consulta_id}</p>

                        <button onClick={() => handleDeleteExame(exame.idReqExame)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}