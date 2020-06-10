import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function FormaDePagamento() {

    const[descFormasPagamento, setdescFormasPagamento] = useState('');

    async function handleFormas(e) {
        e.preventDefault();
        const data = {
            descFormasPagamento
        };
        try{
            const response = await api.post('formas', data);

            alert(`O ID da sua forma de pagamento ${response.data.idFomasPagamento}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }      
    }

    return (
        <div className="especialidade-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Formas de Pagamento</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                   
                </section >
                <form onSubmit={handleFormas}>
                    <input placeholder="Descrição Pagamento" 
                    value={descFormasPagamento}
                    onChange={e => setdescFormasPagamento(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarformas">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}