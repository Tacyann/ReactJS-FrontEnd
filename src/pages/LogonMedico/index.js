import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';


import cheersImg from '../../assets/saude2.png';

import api from '../../services/api';

import './styles.css';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessionmed', {id});
            //console.log(response.data.nomePaciente);
            localStorage.setItem('idMedico',id);
            localStorage.setItem('nomeMedcio', response.data.nomePaciente);

            history.push('/listarmedico');
        } catch (err) {
            alert('Falha no Login,tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section>
                <img src={cheersImg} alt="Logo" />

                <form onSubmit={handleLogon}>
                    <h1>Login</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="black-link" to="/register">
                        <FiLogIn size={18} color="#e02041" />
                        Não tenho cadastro!
                        </Link>
                </form>
            </section>
        </div>
    );
}