import React from "react";
import styled from "styled-components";

const Barra = () => {
    return (
        <Contenedor>
            <Contenido>
                <Titulo>HABILIDADES PERSONALES</Titulo>
                <Separador/>
                <Descripcion>
                    <Item>Habilidad 1</Item>
                    <Item>Habilidad 2</Item>
                    <Item>Habilidad 3</Item>
                    <Item>Habilidad 4</Item>
                </Descripcion>
            </Contenido>
            <Contenido>
                <Titulo>COMPETENCIAS</Titulo>
                <Separador/>
                <Descripcion>
                    <Item>Competencia 1</Item>
                    <Item>Competencia 2</Item>
                    <Item>Competencia 3</Item>
                    <Item>Competencia 4</Item>
                </Descripcion>
            </Contenido>
            <Contenido>
                <Titulo>CONTACTO</Titulo>
                <Separador/>
                <Descripcion>
                    <Item>1155271381</Item>
                    <Item>marianomarquesserra@gmail.com</Item>
                </Descripcion>
            </Contenido>
        </Contenedor>
    );
}

const Contenedor = styled.aside`
    Width: 400px;
    height: 800px;
    float: left;
    text-align: center;
`;

const Titulo = styled.h3`
    color: #64706b;
`;

const Separador = styled.hr`
    width: 100px;
    height: 1px;
    position: relative;
    margin-left: 0px;
    background-color: #64706b;
    border: 3px solid #64706b;
    border-radius: 5px;
`;

const Descripcion = styled.ul`
    position: relative;
    margin-left: 0px;
    float: left;
`;

const Item = styled.li`
    position: relative;
`;

const Contenido = styled.div`
    position: relative;
    margin-left: 30px;
    width: 250px;
    height: 200px;
    text-align: left;
`;

 
export default Barra;