import React  from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';


export default function ReqExame() {

    //const[descEspecialidade, setDescespecialidade] = useState('');

   /* async function handleExame(e) {
        e.preventDefault();

        const data = {
            descReqExame,
            dataReqExame,
            consulta_id
        };

        try{
            const response = await api.post('especialidade', data);

            alert(`O ID da sua especialidade: ${response.data.idEspecialidade}`);
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }      
    }*/

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
                <form className="form">
                    <textarea placeholder="Descrição" />
                    <input type="date" placeholder="Data da Requisição" />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarexame">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                </form>
            </div>
        </div>
    );
}