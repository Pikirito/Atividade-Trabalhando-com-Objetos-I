//Exercicio 1
const pessoa = {
  nome: "José",
  anoDeNascimento: 1998,
  cpf: 23427968286,
  cidade: "Itacoatiara",
  estado: "Amazonas",
  logradouro: "A1",
};

const escola = {
  nome: "Escola Municipal xx xx",
  cnpj: 2937849349239,
  areaDeAtuacao: "Fundamental",
  cidade: "Novo Remanso",
  estado: "AM",
  curso: "Ensino padrão",
};

const curso = {
  nome: "Desevolvimento de jogos",
  duracaoEmAnos: "3 Anos",
  turma: "Turma 12",
  modulos: 3,
};

const endereco = {
  cidade: "Manaus",
  Estado: "AM",
  logradouro: "A1",
  cep: 69112992,
};

//Exercicio 2
const carro = {
  placa: "ABC123",
  classes: ["sedan"],
  luxo: true,
  potencia: 200,
  estacionado: true,
};
//1
function obterPlaca() {
  console.log(carro.placa);
}
obterPlaca();

//2
function verificarClasses() {
  console.log(carro.classes);
}
verificarClasses();

//3
function potenciaReal() {
  if (carro.luxo === true) {
    result = Math.pow(carro.potencia, 2);
  }
  return result;
}
console.log(potenciaReal());

//4
function adicionarNovaClasse(classes) {
  if (carro.classes.length > 3) {
    return "Esse carro não pode receber mais classes";
  } else if (
    classes === "sedan" ||
    classes === "hatchback" ||
    classes === "suv" ||
    classes === "crossover" ||
    classes === "cupe"
  ) {
    return "o carro ja possui esssa classe";
  } else {
    carro.classes.push(classes);
    return "Classe adicionada com sucesso";
  }
}
console.log(adicionarNovaClasse("uno"));
console.log(carro.classes);

//5
function naoMaisLuxo() {
  if (carro.estacionado == false) {
    return `O carro ${carro.placa} não está estacionado`;
  } else if (carro.luxo == false) {
    return `O carro ${carro.placa} não é luxoso`;
  } else {
    return `O carro ${carro.placa} não é luxoso`;
  }
}
console.lognaoMaisLuxo();
