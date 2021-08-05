function add(){
    let newTask = document.getElementById("task-input").value
    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        if(newTask == ""){
            swal({
                title: 'Ocurrió un error',
                text: "Debe ingresar una tarea",
                icon: "error"
        })}
        else{
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks))
            mostrarTareas()
        }
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        mostrarTareas()
        document.getElementById("task-input").value = "";
    }
}
function mostrarTareas(){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let taskView = document.getElementById('tasks-doing');
    taskView.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){
        let task = tasks[i]
        let taskId = i
        taskView.innerHTML += `
        <article class="tasks-item"> ${task}
            <img class="img" src="./img/close.svg" onclick="deleteItem()" id=${taskId}>
        </article>
        `
    }
}
function deleteItem(){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let idItem = event.srcElement.id
    let removeId = parseInt(idItem, 10)
    tasks.splice(removeId, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    mostrarTareas()
}
mostrarTareas()