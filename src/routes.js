import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Paciente from './pages/Paciente';
import Medico from './pages/Medico';
import AgendarConsulta from './pages/AgendarConsulta';
import Consulta from './pages/Consulta';
import ListarMedico from './pages/ListarMedico';
import ListarPaciente from './pages/ListarPaciente';
import Cobertura from './pages/Cobertura';
import Especialidade from './pages/Especialidade';
import ReceitaMedica from './pages/ReceitaMedica';
import ReqExame from './pages/ReqExame';



export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" component={Register}/>
        <Route path="/paciente" component={Paciente}/>
        <Route path="/medico" component={Medico}/>
        <Route path="/cobertura" component={Cobertura}/>
        <Route path="/especialidade" component={Especialidade}/>
        <Route path="/consultas/new" component={AgendarConsulta}/>
        <Route path="/receita" component={ReceitaMedica}/>
        <Route path="/requisicao" component={ReqExame}/>
        <Route path="/consulta" component={Consulta}/>
        <Route path="/listarmedico" component={ListarMedico}/>
        <Route path="/listarpaciente" component={ListarPaciente}/>
        </Switch>
        </BrowserRouter>
    );
}
