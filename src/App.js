import React, { Component} from 'react'
import api from '../src/services/api'
class App extends Component{

  state = {
    devedores : [],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ devedores: response.data});
  }
  render(){

    const { devedores } = this.state;

    return(
      <div>
        <h1>Lista Devedores</h1>
        {console.log(devedores)}
         {devedores.map(devedor => (
           <li key={devedor.DadosListTitulos.dtr_id}>
              <h2>
                <strong>Nome</strong>
                {devedor.DadosListTitulos.dtr_nomedevedor}
                {devedor.DadosListTitulos.dtr_status}
                {devedor.DadosListTitulos.dtr_estadodevedor}
              </h2>
           </li>
          ))}
      </div>
     
    )
  }
}

export default App;
