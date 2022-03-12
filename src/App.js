import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Barra from "./Barra";
import Detalle from "./Detalle";



const App = () => {
  return (
    <Contenedor>
      <Header/>
      <Barra/>
      <Detalle/>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  width: 100%;
  heigth: 100%;
  border: 1px solid #64706b;
`;

export default App;