if(localStorage.getItem('prueba') != null){
    console.log('prueba existe')
}else{
    let prueba = []
    localStorage.setItem("prueba", JSON.stringify(prueba))
    console.log('else se ejecutó')
}
let add = ((text) => {
  var agregar = text;
  let prueba = JSON.parse(localStorage.getItem("prueba"))
  prueba.push(agregar)
  console.log(prueba)
  localStorage.setItem("prueba", JSON.stringify(prueba))
});

let borrar = ((tarea) => {
    let prueba = JSON.parse(localStorage.getItem("prueba"))
    prueba.splice(tarea, 1)
    localStorage.setItem("prueba", JSON.stringify(prueba))
})