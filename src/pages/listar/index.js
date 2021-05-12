import axios from "axios";
import React, { useState, useEffect } from "react";
import {Header, Container, Section} from '../../pages/listar/style';

const api =
  "https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos";

function Listar() {
  const [devedores, setDevedores] = useState([]);
  const [buscaNome, setBuscaNome] = useState("");
  const [buscaStatus, setBuscaStatus] = useState("");
  const [buscaUf, setBuscaUf] = useState("");

  useEffect(() => {
    axios.get(api).then((response) => {
      setDevedores(response.data.DadosListTitulos);
    });
  }, []);
  
    let filtroBusca = devedores.filter((devedor) =>
    devedor.dtr_nomedevedor.toLowerCase().includes(buscaNome.toLowerCase())) 
    
    if(filtroBusca.length > 0) 
    filtroBusca = filtroBusca.filter((filtroBusca) =>
    filtroBusca.dtr_status.includes(buscaStatus)) && filtroBusca.filter((filtroBusca)=>
    filtroBusca.dtr_estadodevedor.includes(buscaUf))

  return (
    <>
    <Header>
      <label>Filtrar por nome: </label>
      <Section>
      <formn>
        <input
          type="text"
          placeholder="Informe nome"
          value={buscaNome}
          onChange={(ev) => setBuscaNome(ev.target.value)}
        />
          <label>Filtrar por Status: </label>
        <select 
          onChange={(ev) =>setBuscaStatus(ev.target.value)}>
            <option value="" selected>Selecionar</option>
            <option value="DTR_PAG">PAGO</option>
            <option value="DTR_PRT">PROTESTADO</option>
            <option value="DTR_RETD">RETIRADO</option>
            <option value="DTR_SUST"> SUSTADO</option>
            <option value="DTR_DEV_CART_SC">DEVOLVIDO PELO CARTORIO SEM CUSTA</option>
            <option value="DTR_DEV_CART_CC">DEVOLVIDO PELO CARTORIO COM CUSTA</option>
            <option value="DTR_LIQUID">LIQUIDAÇÃO EM CONDICIONAL</option>
            <option value="DTR_TIT_ACT">TITULO ACEITO</option>
            <option value="DTR_EDITAL">EDITAL ESTADO BH E RJ</option>
            <option value="DTR_PRT_BC_CAC">PROTESTATO DO BANCO CANCELADO</option>
            <option value="DTR_PRT_EFT">PROTESTO EFETUADO</option>
            <option value="DTR_PRT_EDT">PROTESTO POR EDITAL</option>
            <option value="DTR_RETD_EDT">RETIRADA POR EDITAL</option>
            <option value="DTR_PRT_TERC">PROTESTO DE TERCEIRO CANCELADO</option>
            <option value="DTR_DES_PRT_LB">DESISTENCIA DO PROTESTO POR LIQUIDAÇÃO BANCARIA</option>
            <option value="DTR_SUST_DEF ">SUSTADO DEFINITIVO</option>
            <option value="DTR_EMISS">EMISSAO S2 VIA INSTTRUMENTO</option>
            <option value="DTR_CAC_EFT">CANCELAMETNO EFERTUADO</option>
            <option value="DTR_CAC_N_EFT">CANCELAMENTO NAO EFETUADO</option>
          </select> 
          <label>Filtrar por UF: </label>
          <select
          onChange={(ev) => setBuscaUf(ev.target.value)}>
            <option value="None" selected>Selecionar</option>
            <option value="PA">PA</option>
            <option value="AP">AP</option>
          </select>
      </formn>
      </Section>
     
    </Header>
    <hr/>
    <Container>
    <Section>
      <span>NOME</span>
      <span>STATUS</span>
      <span>ESTADO</span>
    </Section>
      <ul>
        {filtroBusca.map((devedor) => (
          <li key={devedor.dtr_id}>
                <h3>{devedor.dtr_nomedevedor}</h3>
                <h3>{devedor.dtr_status}</h3>
                <h3>{devedor.dtr_estadodevedor}</h3>
            <hr/>      
          </li>
        ))}
      </ul>
    </Container>
    </>
  );
}

export default Listar;
