import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import axios from "axios";

function App() {
  return (
    <div>
      <h1>Lista Devedores</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
