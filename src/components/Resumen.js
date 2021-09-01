import React from "react";
import styled from "@emotion/styled";
import { convertirMayus } from "../helper";

const ContenedorResumen = styled.div`
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #ebebeb;
  color: #000;
`;

const Resumen = ({ datos }) => {
  // Destructuring de datos

  const { marca, year, plan } = datos;

  // Verificar si datos tiene o no contenido para mostrar el resumen
  if (marca === "" || year === "" || plan === "") return null;

  // Mostrar el resumen
  return (
    <ContenedorResumen>
      <h2>Resumen de la cotización</h2>
      <ul>
        <li>Marca: {convertirMayus(marca)} </li>
        <li>Año del Auto: {year}</li>
        <li>Plan: {convertirMayus(plan)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
