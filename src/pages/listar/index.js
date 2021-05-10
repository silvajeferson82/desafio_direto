import axios from "axios";
import React, { useState, useEffect } from "react";

const api =
  "https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos";

function Listar() {
  const [devedores, setDevedores] = useState([]);
  const [devNome, setDevNome] = useState("");

  useEffect(() => {
    axios.get(api).then((response) => {
      setDevedores(response.data.DadosListTitulos);
    });
  }, []);
  //console.log(devedores);

  useEffect(() => {}, []);
  return (
    <>
      <hr />
      <ul>
        {devedores.map((devedor) => (
          <li key={devedor.dtr_id}>
            <table>
              <tr>
                <td>NOME</td>
                <td>STATUS</td>
                <td>UF</td>
              </tr>
              <tr>
                <td>{devedor.dtr_nomedevedor}</td>
                <td>{devedor.dtr_status}</td>
                <td>{devedor.dtr_estadodevedor}</td>
              </tr>
            </table>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listar;
