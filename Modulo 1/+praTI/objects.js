let serie = {
    nome: 'High School Music',
    dataLancamento: 2007,
    atores: ['Zac Afron', 'Client Eastwood', 'Arthur Morgan'],
    status: 'Finalizado',
    classificacao: 18,
    nrTemporadas: {
        temp1: 12,
        temp2: 2,
        temp3: 0
    },

    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome}, a classificação é para maior de ${this.classificacao} anos e ela está ${this.status}`
    }
}

console.log(serie.mostrarCaracteristicas())



let livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R Tolkien',
    ano: '1925',

    mostrarCaracteristicas: function() {
        return `O nome do livro é ${this.titulo}, foi lançado em ${this.ano} e quem escreveu foi ${this.autor}`
    }
}

console.log(livro.mostrarCaracteristicas());


let atleta = {
    nome: 'CR7 - Flavio Caça Rato',
    time: 'Caxias',
    esporte: 'Beach Tenis', 
    melhorAmigo: 'Ribagol',

    celebrarVitoria: function() {
        console.log('SIIIIIIIIII')
    }
}

atleta.celebrarVitoria()


let atletaSecundario = atleta
atletaSecundario.arquiRival = 'Ganso'

console.log(atleta);
console.log(atletaSecundario);

function Anime(nome, personagemForte, personagemFraco, nota) {
    this.nome = nome
    this.personagemForte = personagemForte
    this.personagemFraco = personagemFraco
    this.nota = nota

    this.mostrarAnime = function(){
        return `
        nome: ${this.nome},
        maisForte: ${this.personagemForte},
        maisFraco: ${this.personagemFraco},
        nota: ${this.nota}`
    }
}

// let naruto = new Anime("Naruto", "Ebisu", "Orochimaru", 5)
// console.log(naruto.mostrarAnime());
// let anime2 = new Anime("One Piece", "Coby", "Ace", 5 )
// console.log(anime2.mostrarAnime());

function jogos(titulo, genero, anoDeLancamento, empresa, jogar) {
    return {
        titulo,
        genero,
        anoDeLancamento,
        empresa,
        jogar
    }
}

let jogo = jogos("Dragon Age", "RPS", "2009", "Bioware", () => console.log('Morrendo'))

jogo.jogar()


// Foors

let personagens = [['Killua', 'Mustang'], 'Minato', 'Aiorous']

for(let key in personagens){
    console.log(personagens[key])
}


/*
 Verificar dentro de uma lista de livros os que foram prublicados antes de 2000.
 utilizem For Of
*/

const livraria = [
    {titulo: "Código Limpo", autor: "Martin", ano: 2019},
    {titulo: "The Gunslinger", autor: "Stephen King", ano: 1991},
    {titulo: "Laranja Mecanicao", autor: "Nicole", ano: 1810},
    {titulo: "Pequeno Principe", autor: "Fabiana", ano: 1903},
    {titulo: "As Cronicas Marciana", autor: "Bradbury", ano: 2010}
]

for(let livro of livraria) {
    if (livro.ano < 2000) {
        console.log(livro)
    }
}


/*
Contar a quantidade de filmes por genero
*/

const filmes = [
    {titulo: "Senhor dos anéis", genero: "Fantasia"},
    {titulo: "Jogo da imitaçao", genero: "Histórico"},
    {titulo: "Clube da luta", genero: "Drama"},
    {titulo: "Ilha do medo", genero: "Terror"},
    {titulo: "Pulp Fiction", genero: "Açao"},
    {titulo: "Poderoso Chefao", genero: "Máfia"},
    {titulo: "DVD do Renight - Melhores Momentos", genero: "Histórico"},
    {titulo: "Ai, que vida!", genero: "Comédia"},
    {titulo: "Kill Bill", genero: "Açao"},
    {titulo: "Batman Forever", genero: "Heroi"},
    {titulo: "Batman - Piada Mortal", genero: "Heroi"},
    {titulo: "As branquelas", genero: "Comédia"},
    {titulo: "Terno de 1 bilhao de dólares", genero: "Comédia"},
]

let contagemGenero = {}

filmes.forEach(filme => {
    if(contagemGenero[filme.genero]) {
        contagemGenero[filme.genero]++
    } else {
        contagemGenero[filme.genero] = 1
    }
})

console.table(contagemGenero)

/*
Calcular o fatorial de um número
*/


function calcularFatorial(num) {

    let numero = num
    let contador = 1
    
    for(let i = 1; i <= numero; i++) {
        contador *= i
    }
    
    console.log(contador)

}

calcularFatorial(5)

/*
Imprima os 10 primeiros numeros da sequecia de Fibonacci
*/

function fibonacci() {
    let a = 0, b = 1, temp

    console.log(a)
    console.log(b)

    for(let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}

fibonacci()

/*

*/