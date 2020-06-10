import React  , { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';


export default function Pagamento() {

    const [valor, setValor] = useState('');
    const [datPagamento, setDatPagamento] = useState('');

    async function handlePagamento(e) {
        e.preventDefault();

        const data = {
            valor,
            datPagamento,
        };
        try {
            const response = await api.post('pagamento', data);
            alert(`O ID Pagamento: ${response.data.idPagamento}`);
        } catch (err) {
            alert('Erro paraa inserir pagamento, tente novamente.');
        }
    }

    return (
        <div className="pagamento-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Pagamento</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form onSubmit={handlePagamento}>
                    <input placeholder="Valor" 
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    />
                    <input type="date" placeholder="Data" 
                    value={datPagamento}
                    onChange={e => setDatPagamento(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}