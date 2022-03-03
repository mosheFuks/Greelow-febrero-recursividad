let numRecorridos = []

//Recursividad
const countDown = (a) => {
    if (a == 0) {
        return numRecorridos
    }
    numRecorridos.push(a)
    return countDown(a-1)
}

//Iteracion normal
/* const countDown = () => {
    let i = 1
    while(i <= 5){
        numRecorridos.push(i)
        i++
    }
} */

//Recursividad (Agrega solo los numeros pares)
/* const countDown = (a) => {
    if (a == 0) {
        return numRecorridos
    }
    a % 2 == 0 ? numRecorridos.push(a) : ''
    return countDown(a-1)
} */

countDown(5);
console.log(numRecorridos)
