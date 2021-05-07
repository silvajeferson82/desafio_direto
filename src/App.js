import React, { Component} from 'react'
import Routes from './routes'


function App(){
  /*
  state = {
    devedores: [],
  }

  componentDidMount(){
    fetch(api.get(''))
    .then(response  => response.json())
    .then((data) => console.log(data))
  }

    const { devedores } = this.state;
    console.log(devedores);
    console.log(devedores.DadosListTitulos);*/

    return(
      <div>
        <h1>Lista Devedores</h1>
          {/* {devedores && devedores.DadosListTitulos.length > 0 && (

          )}
          {!devedores && devedores.DadosListTitulos.length === 0 && (
            <h1>Dados nao encontrados</h1>
          )}
         {devedores.DadosListTitulos.map(devedor => (
           <li key={devedor.DadosListTitulos.dtr_id}>
              <h2>
                <strong>Nome</strong>
                {devedor.dtr_nomedevedor}
                {devedor.dtr_status}
                {devedor.dtr_estadodevedor}
              </h2>
           </li>
          ))} */}
      </div>
     
    )
  }


export default App;
