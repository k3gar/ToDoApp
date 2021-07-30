//crear elementos en la lista
let crearElementosLista = ((elemento) => {
    let contenido = document.createTextNode(elemento)
    let tasksDoing = document.getElementById("tasks-doing")
    let taskItem = document.createElement("article")
    taskItem.className += "tasks-item"
    taskItem.appendChild(contenido)
    tasksDoing.appendChild(taskItem)
    console.log(elemento)

})

if(localStorage.getItem('prueba') != null){
    console.log('prueba existe')

    let prueba = JSON.parse(localStorage.getItem("prueba"))

    prueba.forEach(item => {
        crearElementosLista(item);
    });
    
}else{
    let prueba = []
    localStorage.setItem("prueba", JSON.stringify(prueba))
    console.log('else se ejecutó')
}



//Función para añadir elementos al array
let add = (() => {
    let input = document.getElementById("task-input").value
    if(input === ""){
        alert('Ingrese una tarea')
    }else{
        let prueba = JSON.parse(localStorage.getItem("prueba"))
        prueba.push(input)
        localStorage.setItem("prueba", JSON.stringify(prueba))
        document.getElementById("task-input").value = "";

        let contenido = document.createTextNode(input)
        let tasksDoing = document.getElementById("tasks-doing")
        let taskItem = document.createElement("article")
        taskItem.className += "tasks-item"
        taskItem.appendChild(contenido)
        tasksDoing.appendChild(taskItem)
    }
});

//Borrar elementos del array
let borrar = ((tarea) => {
    let prueba = JSON.parse(localStorage.getItem("prueba"))
    prueba.splice(tarea, 1)
    localStorage.setItem("prueba", JSON.stringify(prueba))
})