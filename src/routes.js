import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import LogonPaciente from './pages/LogonPaciente';
import Register from './pages/Register';
import Profile from './pages/Profile';
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
import FormasDePagamento from './pages/FormasDePagamento';
import Pagamento from './pages/Pagamento';
import ListarEspecialidade from './pages/ListarEspecialidade';



export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/logopaci" exact component={LogonPaciente}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/paciente" component={Paciente}/>
        <Route path="/medico" component={Medico}/>
        <Route path="/cobertura" component={Cobertura}/>
        <Route path="/especialidade" component={Especialidade}/>
        <Route path="/listarespecialidade" component={ListarEspecialidade}/>
        <Route path="/consultas/new" component={AgendarConsulta}/>
        <Route path="/receita" component={ReceitaMedica}/>
        <Route path="/requisicao" component={ReqExame}/>
        <Route path="/consulta" component={Consulta}/>
        <Route path="/listarmedico" component={ListarMedico}/>
        <Route path="/listarpaciente" component={ListarPaciente}/>
        <Route path="/formaspagamento" component={FormasDePagamento}/>
        <Route path="/pagamento" component={Pagamento}/>
       
        </Switch>
        </BrowserRouter>
    );
}
