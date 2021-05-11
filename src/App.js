import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <>
      <h1>Lista Devedores</h1>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
