// 3 tipos de loop: for, while, do while

// loop while (enquanto)

let i = 0

while (i <= 10) {
    console.log(i)
    i++
}

console.log('terminei o loop while');

let j = 1
let num= 5

while (j <= 10) {
    console.log(num * j);
    j++
}


// loop for (para)

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//loop do while (faça enquanto)

let k = 0
do {
    console.log(k);
    k++
}while (k <= 10)