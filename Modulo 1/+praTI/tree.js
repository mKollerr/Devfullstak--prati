// árvore \\

class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)  // Adiciona um novo nó filho
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value) // Remove o filho com o valor especificado
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)  // Cria a raiz da árvore
    }

    traverseDFS(callback) {
        function recurse(node) {
            callback(node);  // Executa a função de callback no nó atual
            node.children.forEach(child => recurse(child));  // Percorre recursivamente os filhos
        }

        recurse(this.root);  // Inicia a travessia a partir da raiz
    }
}

const tree = new Tree('A');  // Cria uma nova árvore com a raiz 'A'

B = new TreeNode('B');  // Cria um nó filho 'B'
C = new TreeNode('C');  // Cria um nó filho 'C'
D = new TreeNode('D');  // Cria um nó filho 'D'
E = new TreeNode('E');  // Cria um nó filho 'E'
F = new TreeNode('F');  // Cria um nó filho 'F'
G = new TreeNode('G');  // Cria um nó filho 'G'
H = new TreeNode('H');  // Cria um nó filho 'H'

tree.root.addChild(B);  // Adiciona 'B' como filho de 'A'
tree.root.addChild(C);  // Adiciona 'C' como filho de 'A'
tree.root.addChild(D);  // Adiciona 'D' como filho de 'A'

B.addChild(E);  // Adiciona 'E' como filho de 'B'
B.addChild(F);  // Adiciona 'F' como filho de 'B'

C.addChild(G);  // Adiciona 'G' como filho de 'C'

F.addChild(H);  // Adiciona 'H' como filho de 'D'

function printNode(node) {
    console.log(node.value);  // Imprime o valor do nó
}

// Função para imprimir a árvore de forma estruturada
function printStructured(node, level = 0) {
    console.log('  '.repeat(level) + node.value);
    node.children.forEach(child => printStructured(child, level + 1));
}

tree.traverseDFS = function(callback) {
    function recurse(node, level = 0) {
        callback(node, level);
        node.children.forEach(child => recurse(child, level + 1));
    }
    recurse(this.root);
};

// Imprime a árvore estruturada
tree.traverseDFS((node, level) => {
    const prefix = level > 0 ? '  '.repeat(level - 1) + '|-' : '';
    console.log(prefix + node.value);
});