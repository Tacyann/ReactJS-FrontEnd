import React, { useState, useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarEspecialidade() {

    const [especialidade, setEspecialidade] = useState([]);

    const history = useHistory();

    const idEspecialidade = localStorage.getItem('idEspecialidade');
    const descEspecialidade = localStorage.getItem('descEspecialidade');

    

    useEffect(() => {
        api.get('especialidade', {
            headers: {
                Authorization: idEspecialidade,
            }
        }).then(Response => {
            setEspecialidade(Response.data);
        })
    }, [idEspecialidade]);

    async function handleDeleteEspecialidade(id){
        try{
            await api.delete(`especialidade/${id}`,{
                headers: {
                    Authorization: idEspecialidade,
                }  
            });

            setEspecialidade(especialidade.filter(especialidade => especialidade.id !== id));
        }catch (err){
            alert('Erro ao deletar especialidade, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="listarespecialidade-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/especialidade">Cadastrar Especialidade</Link>
                <button type='button'>
                    <FiPower onClick={handleLogout} size={18} color="#602041" />
                </button>
            </header>
            <h1>Especialidades Cadastradas</h1>
            <ul>
                {especialidade.map(especialidade => (
                     <li key={especialidade.idEspecialidade}>
                     
                     <strong>Descrição Especialidade:</strong>
                     <p>{especialidade.descEspecialidade}</p>
  
                     <button onClick={()=>handleDeleteEspecialidade(especialidade.idEspecialidade)} type='button'>
                         <FiTrash2 size={20} color="#a8a8b3" />
                     </button>
                 </li>
                    ))}
            </ul>
        </div >
    );
}