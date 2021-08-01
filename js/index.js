//Crear elementos en la lista
let crearElementosLista = ((elemento, identify) => {
    let contenido = document.createTextNode(elemento)
    let tasksDoing = document.getElementById("tasks-doing")
    let taskItem = document.createElement("article")
    taskItem.className += "tasks-item"
    taskItem.id = identify
    taskItem.appendChild(contenido)
    tasksDoing.appendChild(taskItem)
    let img = document.createElement("img");
    img.src = "../img/close.svg"
    img.className += "img"
    img.id += identify
    img.onclick = function(){
        let prueba = JSON.parse(localStorage.getItem("prueba"))
        let idItem = event.srcElement.id
        prueba.splice(idItem, 1)
        localStorage.setItem("prueba", JSON.stringify(prueba))
        location.reload();
    }
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
        let identify = prueba.indexOf(item)
        crearElementosLista(item, identify);
        console.log(prueba.indexOf(item))
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
        swal({
            title: 'Ocurrió un error',
            text: "Debe ingresar una tarea",
            icon: "error"
        })

//Añadir id con numero de posición
    }else{
        let prueba = JSON.parse(localStorage.getItem("prueba"))
        let length = prueba.length
        console.log(prueba.length)
        prueba.push(input)
        localStorage.setItem("prueba", JSON.stringify(prueba))
        document.getElementById("task-input").value = "";
        crearElementosLista(input, length)
    }
});

//Borrar elementos del array
/* let borrar = (() => {
    let prueba = JSON.parse(localStorage.getItem("prueba"))
    let idItem = event.srcElement.id
    prueba.splice(idItem, 1)
    localStorage.setItem("prueba", JSON.stringify(prueba))
    //document.getElementById().remove()

}) */