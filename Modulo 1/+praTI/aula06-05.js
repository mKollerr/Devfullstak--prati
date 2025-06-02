////// Funções //////
let valor = 30

function parOuImpar(valor){
    let resultado
    //valor % 2 === 0 ? resultado = 'PAR' : resultado = 'IMPAR'
    if(valor % 2 === 0){
        resultado = 'PAR'
    } else {
        resultado = 'IMPAR'
    }

    return resultado
}

let verificaParOuImpar = parOuImpar(valor)
console.log(verificaParOuImpar);


function calculateArea(height, width) {
    let result = height*width
    console.log(result)
}

calculateArea(10, 10)

// function ordenarArray(array) {
//     n = array.length
//     for(let i = 0; i < n - 1; i++) {
//         for(let j = 0; j < n - 1 - i; j++){
//             if(numeros[j] > numeros[j+1]) {
//                 const temp = numeros[j]
//                 numeros[j] = numeros[j+1]
//                 numeros[j + 1] = temp
//             }
//         }
//     }
//     return array    
// }

// let numeros = [3, 2, 7, 19, 6, 4, 2, 10]
// ordenarArray(numeros)
// console.table(ordenarArray(numeros))

function ordenarArray(array) {
    return array.sort((a, b) => a - b)
}

let result = ordenarArray([1, 5, 4, 3, 2])
console.table(result)


/////// Função Anonima ///////
let test = function() {
    console.log('Teste de função anonima')
}

test()

/////// Arrow Function ////////
let teste2 = (teste) => {console.log(teste)}
teste2('Ozempic')


///////CALLBACK /////////

function showFunction(pato, lino) {
    if(true) {
        pato('Sucesso na requisiçao')
    } else {
        lino('erro na requisiçao')
    }
}

let successCallback = (message) => {console.log(message)} //pato

let errorCallback = function(message) { //lino
    console.log(message);
}

showFunction(successCallback, errorCallback)

// Funçao que retorne a soma dos elementos de um array

function somarArray(array) {
    let result = array.reduce((acumulador, valor) => acumulador + valor, 0)
    return result
}

let nums =[1,2,3,4,5]
console.log(somarArray(nums));


// Retorne o maior número do array

function maiorNumeroArray(arr) {
    let maior = arr[0] //Começa no primeiro numero do array para se todos forem negativos o maior nao ser 0 caso fosse utilizado 'let maior = 0'
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

    return maior
}

console.log(maiorNumeroArray([-121,-2,-3,-12,-23,-444,-1,-4,-10]))