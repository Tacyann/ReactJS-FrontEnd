import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';

export default function ReqExame() {

    const [descReqExame, setdescReqExame] = useState('');
    const [dataReqExame, setdataReqExame] = useState('');

    async function handleReqExame(e) {
        e.preventDefault();

        const data = {
            descReqExame,
            dataReqExame,
        };

        try{
            const response = await api.post('exame', data);

            alert(`O ID do exame: ${response.data.idReqExame}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }      
    }

    return (
        <div className="requisicao-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Requisição de Exame</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form onSubmit={handleReqExame}>
                    <textarea placeholder="Descrição"
                    value={descReqExame}
                    onChange={e => setdescReqExame(e.target.value)}
                    />
                    <input type="date" placeholder="Data da Requisição" 
                    value={dataReqExame}
                    onChange={e => setdataReqExame(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarexame">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}