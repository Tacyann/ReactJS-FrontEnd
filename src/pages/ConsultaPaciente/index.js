import React , {useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { FcEditImage, FcCellPhone, FcCalendar , FcHome, FcBusinessman} from 'react-icons/fc';
import { TiDocument ,TiSortNumerically , TiClipboard} from "react-icons/ti";

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ConsultaPaciente() {
    const [consultas, setConsultas] = useState([]);

    const idPaciente = localStorage.getItem('idPaciente');
    const nomePaciente = localStorage.getItem('nomePaciente');

    useEffect(()=>{
        api.get('profilepaci',{
            headers:{
                Authorization:idPaciente,
            }
        }).then(Response => {
            setConsultas(Response.data);
        })
    },[idPaciente]);

    async function handleDeleteConsulta(idConsulta){
        try{
            await api.delete(`consultas/${idConsulta}`), {
                headers:{
                    Authorization:idPaciente,
                }
            };
        } catch (err){
            alert('Erro ao deletar consulta, tente novamente.');
        }
    }

    return (
        <div className="listarpaciente-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, {nomePaciente}</span>
                <Link className='button' to="/paciente">Cadastrar Pacientes</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Pacientes</h1>
            <ul>
            {consultas.map(consulta =>(
                          <li key={consulta.idConsulta}>
                    
                          <p>{consulta.dataConsulta}</p> 
                          
                          <p>{consulta.medico_id}</p> 
                       
                          <p>{consulta.paciente_id}</p> 
                    
                          <button type='button'>
                              <FcEditImage size={20} />
                              <FiTrash2 size={20} color="#a8a8b3" />
                          </button>
      
                      </li>
            ))}
            </ul>
        </div >
    );
}