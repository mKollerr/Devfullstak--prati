// function fatorial (n) {
//     if (n===0) {
//         return 1
//     } else {
//         return n * fatorial(n - 1)
//     }
// }

// console.log(fatorial(5)); 

// function soma(n) {
//     if(n === 1) {
//         return 1
//     } else {
//         return n + soma(n - 1)
//     }
// }

// console.log(soma(5));


// function fibonacci(n) {
//     if(n == 0) {
//         return 0
//     } else if(n == 1){
//         return 1
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(6));


const categorias = [{
    id: 1,
    nome: "eletronicos",
    filhos: [
        {id: 2, nome: "celulares", filhos: []},
        {id: 3, nome: "computadores", filhos: [
            {id: 4, nome: "notebooks", filhos: []}
        ]}
    ]
},
{
    id: 5,
    nome: "roupas",
    filhos: []
}]

function imprimirCategorias(lista, nivel = 0) {
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0) {
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}

imprimirCategorias(categorias)