const validaCPF = (cpf) => {
  const totalDigitos = cpf.length;
  const soma = cpf.split("").reduce((prev, curr) => prev + Number(curr), 0);
  return totalDigitos === 11 && soma <= 80;
};
