class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;  // Inicializa a raiz da árvore como nula/vazia
    }

    insert(value) {
        let newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode;  // Se a árvore estiver vazia, define o novo nó como raiz
            return
        } 

        this.insertNode(this.root, newNode);  // Caso contrário, chama a função para inserir o nó na posição correta
    }

    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {  // Se o valor do novo nó for menor que o do nó atual
            if(currentNode.left === null) {  // Verifica se o filho esquerdo está vazio
                currentNode.left = newNode;  // Se o filho esquerdo estiver vazio, insere o novo nó lá
            } else {
                this.insertNode(currentNode.left, newNode);  // Caso contrário, chama recursivamente para o filho esquerdo
            }
        } else {  // Se o valor do novo nó for maior ou igual ao do nó atual
            if(currentNode.right === null) {  // Verifica se o filho direito está vazio
                currentNode.right = newNode;  // Se o filho direito estiver vazio, insere o novo nó lá
            } else {
                this.insertNode(currentNode.right, newNode);  // Caso contrário, chama recursivamente para o filho direito
            }
        }
    }

    inorderTraversal(node = this.root) {
        if(node !== null) {
            this.inorderTraversal(node.left);  // Percorre o filho esquerdo
            console.log(node.value);  // Imprime o valor do nó atual
            this.inorderTraversal(node.right);  // Percorre o filho direito
        }
    }

    printTree(node = this.root, prefix = "", isLeft = true) {
        if (node !== null) {
            if (node.right !== null) {
                this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
            }
            console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
            if (node.left !== null) {
                this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
            }
        }
    }

    search(value, node = this.root) {
        if (node === null) {
            return false;  // Se o nó atual for nulo, o valor não foi encontrado
        }
        if (value === node.value) {
            return true;  // Se o valor do nó atual for igual ao valor procurado, retorna verdadeiro
        } else if (value < node.value) {
            return this.search(value, node.left);  // Se o valor for menor, procura no filho esquerdo
        } else {
            return this.search(value, node.right);  // Se o valor for maior, procura no filho direito
        }
    }
}

const tree = new BinaryTree();  // Cria uma nova árvore binária

tree.insert(10);  // Insere o valor na árvore
tree.insert(5);  // Insere o valor na árvore
tree.insert(12);  // Insere o valor na árvore
tree.insert(3);  // Insere o valor na árvore
tree.insert(6);  // Insere o valor na árvore
tree.insert(11);  // Insere o valor na árvore
tree.insert(7);  // Insere o valor na árvore
tree.insert(10);  // Insere o valor na árvore
tree.insert(10);  // Insere o valor na árvore
tree.insert(0);  // Insere o valor na árvore
tree.insert(13);  // Insere o valor na árvore

//tree.inorderTraversal()  // Imprime os valores da árvore em ordem
tree.printTree();  // Imprime a árvore de forma estruturada

console.log(tree.search(6));  // Procura o valor 6 na árvore
console.log(tree.search(15));  // Procura o valor 15 na árvore (não existe)