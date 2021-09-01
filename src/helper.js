// Calcular diferencia de años

export function diferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcular porcentaje por marca
// Asiatico 5% - Americano 15% - Europeo 30%

export function porcentajeMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

// Calcular porcentaje por plan
// Basico 20% -  Completo 50%

export function porcentajePlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

// Cambiar primer caracter a mayúscula

export function convertirMayus(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
