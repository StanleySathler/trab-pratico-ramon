const calculaFaixaEtaria = (idade) => {
  if (idade < 14) return "Criança";
  else if (idade < 29) return "Adolescente";
  else return "Adulto";
};

const calcularIdadeDoCachorro = (idadeReal, faixaEtariaCb) => {
  const idade = idadeReal * 7;
  return faixaEtariaCb(idade);
};

const idade = 2;
const faixaEtaria = calcularIdadeDoCachorro(idade, calculaFaixaEtaria);
console.log(`Idade: ${idade} | Faixa etária: ${faixaEtaria}`);
