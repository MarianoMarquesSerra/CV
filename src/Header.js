import React from "react";
import styled from "styled-components";
import img1 from "./images/FotoPerfil.jpg"

const Header = () => {
    return (
        <Contenedor>
            <FotoPerfil src={img1} alt="foto no encontrada" />
            <Nombre>Mariano Marques Serra</Nombre>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    position: relative;
    display: flex;
    morgin: 0;
    Width: 100%;
    height: 200px;
    background-color: #1fcc87;
`;

const FotoPerfil = styled.img`
    position: relative;
    display:flex;
    padding: 20px;
    width:150px;
    height:150px;
    border-radius:150px;
    float: left;
`;

const Nombre = styled.h1`
    position: relative;
    display: flex;
    color: white;
    margin-left: 250px;
    margin-top: 30px;
    font-size: 50px;
    font-family: San Serif;
`;

export default Header;