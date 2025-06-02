// Exercício 1 - Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
//const prompt = require('prompt-sync')();

let tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
let tempFahrenheit = (tempCelsius * 9) / 5 + 32;
console.log(`${tempCelsius}°C em Fahrenheit é: ${tempFahrenheit.toFixed(2)}°F`);

//Exercício 2 - Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
//const prompt = require('prompt-sync')();

let numEleitores = Number(prompt("Informe a quantidade total de votos do município:"));
let votosBrancos = Number(prompt("Informe a quantidade total de votos brancos:"));
let votosNulos = Number(prompt("Informe a quantidade total de votos nulos:"));
let votosValidos = Number(prompt("Informe a quantidade total de votos válidos:"));

let porcentagemBrancos = (votosBrancos / numEleitores) * 100;
let porcentagemNulos = (votosNulos / numEleitores) * 100;
let porcentagemValidos = (votosValidos / numEleitores) * 100;

console.log(
  `${porcentagemBrancos.toFixed(0)}% dos votos foram brancos, ${porcentagemNulos.toFixed(0)}% foram nulos e ${porcentagemValidos.toFixed(2)}% foram validos.`
);

// Exercício 3 - A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)

//[Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (percentual de alunos reprovados em relação ao total de alunos das duas

let alunosTurmaC = 60;
let alunosTurmaD = 20;
let totalDeAlunos = alunosTurmaC + alunosTurmaD;

let percentualReprovadosTurmaC = 10;
let percentualAprovadosTurmaD = 85;

let reprovadosTurmaC = (percentualReprovadosTurmaC / 100) * alunosTurmaC;
let reprovadosTurmaD = alunosTurmaD - (percentualAprovadosTurmaD / 100) * alunosTurmaD;
let totalDeReprovados = reprovadosTurmaC + reprovadosTurmaD;

let porcentagemTotalDeReprovados = (totalDeReprovados / totalDeAlunos) * 100;

console.log(`A quantida de alunos reprovados na turma C é ${reprovadosTurmaC}`);
console.log(`A quantida de alunos reprovados na turma D é ${reprovadosTurmaD}`);
console.log(`A porcentagem total de alunos reprovados é de ${porcentagemTotalDeReprovados.toFixed(2)}`);

//Exercício 4 - Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.
// const prompt = require('prompt-sync')();

let diaDaSemana = prompt("Informe o dia da semana atual (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado)").toLowerCase();

switch (diaDaSemana) {
  case "domingo":
    console.log("Final de Semana");
    break;
  case "sabado":
    console.log("Final de Semana");
    break;
  default:
    console.log("Dia útil");
    break;
}

//Exercício 5 - Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
//const prompt = require("prompt-sync")();

let numero;

do {
  numero = Number(prompt("Informe um número, negativo ou positivo, você escolhe:"));
  if (numero > 0) {
    console.log("Positivo");
  } else if (numero < 0) {
    console.log("Negativo");
  } else {
    break;
  }
} while (numero != 0);

//Exercício 6 - Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.
const prompt = require("prompt-sync")();

let senhaValida = 2807;
let senha;

while (senha != senhaValida) {
  senha = Number(prompt("Informe sua senha"));
  if (senha === senhaValida) {
    console.log("Acesso permitod");
  } else {
    console.log("Senha Inválida");
  }
}
