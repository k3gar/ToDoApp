let prueba = []
let prueba2 = 'Muy buenos días'
prueba.push(prueba2)
localStorage.setItem("prueba", JSON.stringify(prueba))

let regresandoArray = localStorage.getItem('prueba')
let almacenado = JSON.parse(regresandoArray)
let prueba3 = 'Sin comentarios'

almacenado.push(prueba3)
localStorage.setItem("prueba", JSON.stringify(almacenado))



console.log(regresandoArray)
console.log(almacenado)