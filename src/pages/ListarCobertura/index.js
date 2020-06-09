import React, { useState, useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarCobertura() {

    const [cobertura, setCobertura] = useState([]);

    const history = useHistory();

    const idCobertura = localStorage.getItem('idCobertura');
    const descCobertura = localStorage.getItem('descCobertura');

    

    useEffect(() => {
        api.get('cobertura', {
            headers: {
                Authorization: idCobertura,
            }
        }).then(Response => {
            setCobertura(Response.data);
        })
    }, [idCobertura]);

    async function handleDeleteCobertura(id){
        try{
            await api.delete(`cobertura/${id}`,{
                headers: {
                    Authorization: idCobertura,
                }  
            });

            setCobertura(cobertura.filter(cobertura => cobertura.id !== id));
        }catch (err){
            alert('Erro ao deletar cobertura, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="listarcobertura-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/cobertura">Cadastrar Cobertura</Link>
                <button type='button'>
                    <FiPower onClick={handleLogout} size={18} color="#602041" />
                </button>
            </header>
            <h1>Coberturas Cadastradas</h1>
            <ul>
                {cobertura.map(cobertura => (
                     <li key={cobertura.idCobertura}>
                     
                     <strong>Descrição Especialidade:</strong>
                     <p>{cobertura.descCobertura}</p>
  
                     <button onClick={()=>handleDeleteCobertura(cobertura.idCobertura)} type='button'>
                         <FiTrash2 size={20} color="#a8a8b3" />
                     </button>
                 </li>
                    ))}
            </ul>
        </div >
    );
}