// exercicios - 23, 24, 25, 26, 27, 28, 29, 30

// 23
const meuPinguim = {
  nome: "Kowalski",
  reino: "Animalia",
  filo: "Chordata",
  classe: "Aves",
  ordem: "Sphenisciformes",
  genero: "Spheniscus",
};

// 24
console.log(`Olá, eu sou um pinguim e meu nome é ${meuPinguim.nome}`);

// 25
meuPinguim.podeVoar = false;

// 26
meuPinguim.emitirSom = () =>
  console.log("CHIRP CHIRP! É assim que os pinguins se parecem?");

// 27
meuPinguim.fly = function () {
  if (this.podeVoar) console.log("Eu posso voar!");
  else console.log("Não posso voar!");
};

// 28
meuPinguim.fly();

// 29
for (let prop in meuPinguim) console.log(prop);
console.log();

// 30
for (let prop in meuPinguim) console.log(meuPinguim[prop]);
console.log();
