// console.log("Hello World!");

// console.log('o termo "mané" é comum no rio de janeiro');

// console.log(``);

// console.log(1.5);
// console.log(typeof 1.5);

// let name = 'Hyago'
// var anotherName = 'Jaques'

// let teste
// console.log(teste);

// let titulosDoInter = null
// console.log(titulosDoInter);

// let cursando = true
// console.log(cursando); 
// console.log(typeof(cursando));

// let num1 = 6
// let num2 = 2

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// let num = "4"
// console.log(num + 10); //concatena 4 com 10
// console.log(parseInt(num) + 10); //transforma 4 em um numero e soma

// let counter = 1
// counter = counter + 1
// counter++
// console.log(counter);
// counter = counter - 1
// counter--
// console.log(counter);

// let counter = 1
// console.log(counter++);

// Incrementar de dois em dois

// let counter = 1
// let step = 2

// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step

// console.log(counter);


// let idade = 34

// if(idade >= 18 && idade <= 32) {
//     console.log('Pode participar do concurso');
// } else {
//     console.log('Idade fora do estipulado');
    
// }


// Exercicio 1 = verificar se o numero e par ou impar

// let numParImpar = 18

// numParImpar % 2 === 0 ? console.log('Par') : console.log('Impar');


// Exercicio 2 = encontre o maior de 3 numeros

// let num1 = 12
// let num2 = 12
// let num3 = 15

// if((num1 > num2) && (num1 > num3)){
//     console.log('O primeiro valor é maior');
// } else if ((num2 > num1) && (num2 > 3)) {
//     console.log('O segundo valor é maior');
// } else if ((num3 > num1) && (num3 > num2)) {
//     console.log('O terceiro valor é o maior');
// } else {
//     console.log('Os numeros são iguais ou há um empate entre dois ou mais numeros');
// }


// Exercicio 3 = Calculadora simples (4 operações fundamentair) usando entrada do usuário

const prompt = require('prompt-sync')()

// let valor1 = Number(prompt('Insira o primeiro valor'))
// let valor2 = Number(prompt('Insira o segundo valor'))
// let operacao = prompt('Informe a operacao desejado (+, -. *, /)')
// let resultado = 0

// if (operacao === '+') {
//     resultado = valor1 + valor2
// } else if (operacao === '-') {
//     resultado = valor1 - valor2
// } else if (operacao === '*') {
//     resultado = valor1 * valor2
// } else if (operacao === '/') {
//     if(valor2 !== 0) {
//         resultado = valor1 / valor2
//     } else {
//         console.error('Erro: divisão por zero');
//         resultado = undefined
//     }
// } else {
//     console.log('Operação invalida');
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log(resultado);
// }

// SWITCH

// let opcao = 'a'

// switch(opcao) {
//     case 1:
//         console.log('Voce selecionou a primeira opcao');
//         break
//     case 2:
//         console.log('Voce selecionou a seguynda opcao');
//         break
//     case 3:
//         console.log('Voce selecionou a terceira opcao');
//         break
//     default:
//         console.log('Voce não escolheu opcão valida');
//         break
// }


let nota1 = Number(prompt ('Informe a nota da prova 1'))
let nota2 = Number(prompt ('Informe a nota da prova 2'))
let media = (nota1 + nota2)/2


let opcao =Number(prompt ('Qual serviço você deseja acessar? 1: saber a media. ou 2:saber se esta aprovado ou não.'))

switch(opcao) {
    case 1:
        console.log(media);
        break
    case 2:
        if(media >= 60){
            console.log('Aprovado');
        } else {
            console.log("Reprovado");   
        }
        break
    default:
        console.log('Você não escolheu uma opção valida');
}



// Exercicio 4: calcular MDC entre dois numeros
let num1 = 18
let num2 = 12
  

// Exercicio 5: verificar se um numero é primo
// Exercicio 6: criar calculadora utilizando Switch Case