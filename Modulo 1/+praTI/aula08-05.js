/*
console.log('Enzo Grigol'.length)
console.log('Enzo Grigol'.charAt(0))
console.log('Enzo Grigol'.indexOf('o'))
console.log('Enzo Grigol'.replace('Enzo', 'Mateus'))
console.log('Enzo Grigol'.substring(1, 3))
console.log('Enzo Grigol'.toUpperCase())
console.log('Enzo Grigol'.toLowerCase())
console.log('  Enzo Grigol'.trim())
*/

/*
console.log(Math.ceil(9.5)) //Arredonda pra cima
console.log(Math.floor(9.5)) //Arredonda pra baixo
console.log(Math.round(9.5)) //Arredonda pra cima ou baixo, qual esta mais proximo
console.log(Math.sqrt(81)) //Raiz quadrada
console.log(Math.pow(2, 3)) //2 elevado a 3
console.log(Math.cbrt(81)) // Raiz cúbica
console.log(Math.abs(81.123123123)) //Valor absoluto
console.log(Math.random()) //Número aleatório entre 0 e 1
console.log(Math.random() * 10) //Número aleatório entre 0 e 10
console.log(Math.random() * 10 + 1) //Número aleatório entre 1 e 10
*/

/*
let date = new Date()

console.log(date.getDate()) //Dia do mês
console.log(date.getMonth() + 1) //Mês
console.log(date.getFullYear()) //Ano
console.log(date.toString()) //Data em string

let date1 = new Date(2025, 7, 5)
let date2 = new Date(1998, 21, 11)

console.log(date1.toString())
console.log(date2.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundosEntreDatas = Math.abs((date1.getTime()) - date2.getTime())
console.log(milissegundosEntreDatas)

let milissegundosDias = (1 * 24 * 60 * 60 * 1000)

console.log(Math.ceil(milissegundosEntreDatas/milissegundosDias)) // Diferença entre datas
*/

/*
function reverseString(str) {
    return str.split('').reverse().join('')  //split divide em array colocando aspas, reverse inverte, join tira as aspas
}

console.log(reverseString('Socorram me subi no onibus em marrocos'));
*/

/*
//Formatar data

let date = new Date()

function formatDate (date) {
    let day = date.getDate().toString().padStart(2, '0')
    let mouth = (date.getMonth() + 1).toString().padStart(2, '0')
    let year= date.getFullYear()

    return `${day}/${mouth}/${year}`
}

console.log(formatDate(date))
*/

/*
//Gerar numero randomico entre dois valores
let num1 = 5
let num2 = 8

function getRandomNumber(min, max){
    return parseInt(Math.random() * (max - min + 1) + min)
}

console.log(getRandomNumber(num1, num2));
*/

// Contar as vogais em uma string

function countVowels(str) {
    let vowels = str.match(/[aeiouàáâãäèéêëìíîïòóôõöùúûü]/gi)  // Regex, match compara com oq esta entre [] g = global, pra verificar tudo e n parar no primeiro, i = case insensitive para n ter diferença entre maiuscula e minuscula
    return vowels ? vowels.length : 0
}

console.log(countVowels('Gremio tetra campeao da libertadores'))