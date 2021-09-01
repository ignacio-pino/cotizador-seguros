import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // State con los datos de la cotizacion

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [carga, setCarga] = useState(false);

  // Destructuring de los datos para pasarlo a otros componentes

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCarga={setCarga} />
        {carga ? <Spinner /> : null}
        {!carga ? (
          <>
            <Resumen datos={datos} />
            <Resultado cotizacion={cotizacion} />{" "}
          </>
        ) : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
