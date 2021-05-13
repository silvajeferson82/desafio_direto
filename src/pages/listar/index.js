import React, { useState, useEffect } from "react";
import {Header, Container, Section, Table, Li } from '../../pages/listar/style';
import api from "../../service/api";

function Listar() {
  const [devedores, setDevedores] = useState([]);
  const [copiaDevedores, setCopiaDevedores] = useState([]);
  const [buscaNome, setBuscaNome] = useState("");
  const [buscaStatus, setBuscaStatus] = useState("");
  const [buscaUf, setBuscaUf] = useState("");

  useEffect(() => {
    api.get('dadosProtesto/ListaTitulos').then((response) => {
      setDevedores(response.data.DadosListTitulos);
    });
  }, []);

  
  function setName() {
    
  }

  function setStatus() {
    
  }


    let filtroBusca = devedores.filter((devedor) =>
    devedor.dtr_nomedevedor.toLowerCase().includes(buscaNome.toLowerCase())) 
    
    if(filtroBusca.length > 0) 
    filtroBusca = filtroBusca.filter((filtroBusca) =>
    filtroBusca.dtr_status.includes(buscaStatus)) && filtroBusca.filter((filtroBusca)=>
    filtroBusca.dtr_estadodevedor.includes(buscaUf))

  return (
    <>
    <Header>
      <div>
      <label>Filtrar por nome: </label>
        <input
          type="text"
          placeholder="Informe nome"
          value={buscaNome}
          onChange={(ev) => setBuscaNome(ev.target.value)}
        />
      </div>
      <div>
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
      </div>
      <div>
      <label>Filtrar por UF: </label>
          <select
          onChange={(ev) => setBuscaUf(ev.target.value)}>
            <option value="None" selected>Selecionar</option>
            <option value="PA">PA</option>
            <option value="AP">AP</option>
          </select>
      </div>
     
    </Header>
    <hr/>
    <Container>
    <Section>
      <h2>NOME</h2>
      <h2>STATUS</h2>
      <h2>ESTADO</h2>
    </Section>
        <ol>
        {filtroBusca.map((devedor) => (
          <Li key={devedor.dtr_id}>
            <p>{devedor.dtr_nomedevedor}</p>
            <p>{devedor.dtr_status}</p>
            <p>{devedor.dtr_estadodevedor}</p>
          </Li>
        ))}
        </ol>
    </Container>
    </>
  );
}

export default Listar;
