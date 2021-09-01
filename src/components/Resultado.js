import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: #ebebeb;
  color: #000;
`;

const MensajeCotizacion = styled.p`
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultadoCotizacion = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #ebebeb;
  color: #000;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y seguro.</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <MensajeCotizacion>
        El total a pagar es de: $ <span>{cotizacion}</span>
      </MensajeCotizacion>
    </ResultadoCotizacion>
  );
};

export default Resultado;
