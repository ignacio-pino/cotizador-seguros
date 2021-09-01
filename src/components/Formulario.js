import React, { useState } from "react";
import styled from "@emotion/styled";
import { diferenciaYear, porcentajeMarca, porcentajePlan } from "../helper";

// Estilos para el formulario

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

// Estilo para Marca y Año

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

// Estilo para Plan

const InputRadio = styled.input`
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

// Estilo de boton "Cotizar"

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

// Estilo de mensaje de error

const Error = styled.div`
  background-color: #ff514d;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const Formulario = ({ setResumen, setCarga }) => {
  // Crear state con los datos

  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  // state del error

  const [error, setError] = useState(false);

  // Destructuring de los valores de datos

  const { marca, year, plan } = datos;

  // Cargar los datos en el state

  const cargarInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Validacion

  const handleSubmit = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Precio base

    let resultado = 2000;

    // Cargar diferencia de años

    const diferencia = diferenciaYear(year);

    // Restar 3% por cada año

    resultado -= (diferencia * 3 * resultado) / 100;

    // Multiplicar por porcentaje de marca

    resultado = porcentajeMarca(marca) * resultado;

    // Cargar porcentaje por plan

    const porcentaje = porcentajePlan(plan);

    // Multiplicar por porcentaje de Plan

    resultado = parseFloat(porcentaje * resultado).toFixed(2);

    // Mostrar spinner

    setCarga(true);

    setTimeout(() => {
      // Esconder spinner
      setCarga(false);
      // Pasar datos a otros componentes

      setResumen({ cotizacion: Number(resultado), datos });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error> Todos los campos son obligatorios </Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={cargarInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={cargarInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={cargarInformacion}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={cargarInformacion}
        />{" "}
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
