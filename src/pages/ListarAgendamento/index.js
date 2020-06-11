import React, { useState, useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarAgendamento() {

    const [consulta, setConsulta] = useState([]);

    const history = useHistory();

    const idConsulta = localStorage.getItem('idConsulta');
    const dataConsulta = localStorage.getItem('dataConsulta');
    const [medico_id, setMedicoID] = useState(null);
    const [medicos, setMedicos] = useState([]);


    async function consultaMedico() {
        const response = await api.get('medico');
        if (response.data) {
            return response.data.map(medico => {
                return {
                    value: medico.idMedico,
                    label: medico.nomeMedico,
                }
            });
        }
        return [];
    }
 

    useEffect(async () => {
        setMedicos(await consultaMedico())
    }, [])

    useEffect(() => {
        api.get('consulta', {
            headers: {
                Authorization: idConsulta,
            }
        }).then(Response => {
            setConsulta(Response.data);
        })
    }, [idConsulta]);


 async function handleDeleteConsulta(idConsulta){
        try{
            await api.delete(`consulta/${idConsulta}`,{
                headers: {
                    Authorization: idConsulta,
                }  
            });
            setConsulta(consulta.filter(consulta => consulta.idConsulta !== idConsulta))
        }catch (err){
            alert('Erro ao deletar consulta, tente novamente.');
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="listaragendamento-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, à Cheers</span>
                <Link className='button' to="/consultas/new">Agendar Consulta</Link>
                <button type='button'>
                    <FiPower onClick={handleLogout} size={18} color="#602041" />
                </button>
            </header>
            <h1>Consultas Cadastradas</h1>
            <ul>
                {consulta.map(consulta => (
                     <li key={consulta.idConsulta}>
                     
                     <strong>Data da Consulta:</strong>
                     <p>{consulta.dataConsulta}</p>

                     <strong>Médico:</strong>
                     <p>{consulta.medico_id}</p>

                     <strong>Paciente:</strong>
                     <p>{consulta.paciente_id}</p>
  
                     <button onClick={()=>handleDeleteConsulta(consulta.idConsulta)} type='button'>
                         <FiTrash2 size={20} color="#a8a8b3" />
                     </button>
                 </li>
                    ))}
            </ul>
        </div >
    );
}