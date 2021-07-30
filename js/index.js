//Crear elementos en la lista
let crearElementosLista = ((elemento) => {
    let contenido = document.createTextNode(elemento)
    let tasksDoing = document.getElementById("tasks-doing")
    let taskItem = document.createElement("article")
    taskItem.className += "tasks-item"
    taskItem.appendChild(contenido)
    tasksDoing.appendChild(taskItem)
    let img = document.createElement("img");
    img.src = "../img/close.svg"
    img.className += "img"
    taskItem.appendChild(img)
    console.log(elemento)
})


//Revisa si el array vacío existe. 
//Si existe, nos imprime los elementos del array que ya existen.
//Si no existe, lo crea
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
        crearElementosLista(input)
    }
});

//Borrar elementos del array
let borrar = ((tarea) => {
    let prueba = JSON.parse(localStorage.getItem("prueba"))
    prueba.splice(tarea, 1)
    localStorage.setItem("prueba", JSON.stringify(prueba))
})