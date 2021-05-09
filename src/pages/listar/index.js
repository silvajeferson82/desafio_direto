import React, { useState, useEffect } from "react";
import Api from "./../../services/api";

function Listar() {
  const [devedores, setDevedores] = useState([]);

  useEffect(() => {
    Api.get("/", async (req, res) => {
      try {
        const { data } = await Api;
        console.log(data);
        return res.json(data);
      } catch (error) {
        console.log(error);
      }
    });
  });

  return (
    <>
      <h2>Teste de chamada API</h2>
    </>
  );
}

export default Listar;
