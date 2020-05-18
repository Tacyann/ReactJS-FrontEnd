import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Paciente from './pages/Paciente';
import Medico from './pages/Medico';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" component={Register}/>
        <Route path="/paciente" component={Paciente}/>
        <Route path="/medico" component={Medico}/>
        </Switch>
        </BrowserRouter>
    );
}
