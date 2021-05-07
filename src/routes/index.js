import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Listar from './../pages/listar';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Listar}/>
        </Switch>
    )
}

export default Routes;