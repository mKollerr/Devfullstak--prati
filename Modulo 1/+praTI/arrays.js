// arrays em javascript são objetos 

let fruitList = Array( )
let nameList = ['Matheus', 'Kanneman', 'Killua']

fruitList[0] = 'Maçã'
fruitList[1] = 'Banana'
fruitList['Vermelhas'] = 'Morango'
fruitList[2] = 'Melão'

console.log(fruitList);
console.table(fruitList)

console.log(nameList);
console.table(nameList)

// for(let i = 0; i < nameList.length; i++){
//     console.log(nameList[i]);
// }

fruitList.push('Morango') //Add item no final do array
fruitList.unshift('Pera') //Add item no começo do array
console.table(fruitList)
fruitList.pop() //Exclui item no final do array
fruitList.shift() //Exclui item no começo do array
console.table(fruitList)

let resultado = fruitList.indexOf('Maçã')
console.log(resultado)

//Array de arrays ou matriz










///////////Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.


///////////Use métodos de array para calcular:

///////////A soma de todos os elementos.

///////////A média dos elementos.

///////////Gere um novo array chamado pares que contenha apenas os números pares de numeros.

///////////Imprima no console:

///////////O array original 'numeros'

///////////A soma

///////////A média

///////////O array pares

///////////let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
///////////let soma = 0
///////////let media = 0
///////////let pares = []

// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i]
//     if(numeros[i] % 2 == 0){
//         pares.push(numeros[i])
//     }
// }

// media = soma/numeros.length

// console.log(numeros);
// console.log(soma);
// console.log(media);
// console.log(pares);

// const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0) 
// const media = soma/numeros.length

// const pares = numeros.filter(num => num % 2 == 0)

// console.log(numeros);
// console.log(soma);
// console.log(media);
// console.log(pares);

/////////// Ordene o array numeros em ordem crescente antes de calcular a soma e a média ///////////

let numeros = [3, 2, 7, 19, 6, 4, 2, 10]
let n = numeros.length

// for(let i = 0; i < n - 1; i++) {
//     for(let j = 0; j < n - 1 - i; j++){
//         if(numeros[j] > numeros[j+1]) {
//             const temp = numeros[j]
//             numeros[j] = numeros[j+1]
//             numeros[j + 1] = temp
//         }
//     }
// }

// console.table(numeros)

console.log(numeros.sort((a, b) => a - b))


// ARRAYS MULTIDIMENSIONAIS

let matriz = [ ]

for(let i = 0; i < 10; i++){
    matriz[i] = []
    console.log(matriz)
    for(let j = 0; j < 10; j++ ) {
        matriz[i] [j] = 'Uva'
    }
}

console.table(matriz)


let comercio = [['Celulares'], ['Eletrodomesticos']]
comercio['Celulares'] ['Xiaomi']
comercio['Celulares'] ['Samsung']
comercio['Celulares'] ['Aples']

console.log(comercio);


// Relembrando arrays

let listaCoisas = Array()

listaCoisas['hardware'] = Array()
listaCoisas['hardware'] [0] = 'Placa de Video'
listaCoisas['hardware'] [1] = 'Notebook'

listaCoisas['Filmes'] = Array()
listaCoisas['Filmes'] [0] = 'Senhor dos anéis'
listaCoisas['Filmes'] [1] = 'Harry Potter'

console.table(listaCoisas)
