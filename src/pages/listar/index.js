import axios from "axios";
import React, { useState, useEffect } from "react";

const api =
  "https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos";

function Listar() {
  const [devedores, setDevedores] = useState([]);
  const [buscaNome, setBuscaNome] = useState("");

  useEffect(() => {
    axios.get(api).then((response) => {
      setDevedores(response.data.DadosListTitulos);
    });
  }, []);
  //console.log(devedores);

  useEffect(() => {}, []);

  const nomeFiltro = devedores.filter((devedor) =>
    devedor.dtr_nomedevedor.toLowerCase().includes(buscaNome.toLowerCase())
  );

  //console.log(buscaNome);
  return (
    <>
      <hr />
      <input
        type="text"
        placeholder="Informe nome"
        value={buscaNome}
        onChange={(ev) => setBuscaNome(ev.target.value)}
      />
      <ul>
        {nomeFiltro.map((devedor) => (
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
