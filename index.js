const calcularFaltasTotais = (faltas) => {
  const faltasTotais = faltas * 3;

  if (faltasTotais < 0 || faltasTotais > 60) {
    throw new Error("Valor inválido");
  }
  return faltasTotais;
};

const calcularMedia = (nota1, nota2) => {
  if (nota1 < 0.0 || nota2 < 0.0 || nota1 > 10.0 || nota2 > 10.0) {
    throw new Error("Nota inválida");
  }
  return parseFloat(((nota1 + nota2) / 2).toFixed(1));
};

const avaliarAluno = (media, faltasTotais) => {
  if (media >= 7.0 && faltasTotais <= 15) {
    return "Aprovado";
  } else if (media >= 3.0 && media < 7.0 && faltasTotais <= 15) {
    return "Aguardando a final";
  } else if (media < 3.0 && faltasTotais <= 15) {
    return "Reprovado por média";
  } else {
    return "Reprovado por faltas";
  }
};

module.exports = { calcularFaltasTotais, calcularMedia, avaliarAluno };
