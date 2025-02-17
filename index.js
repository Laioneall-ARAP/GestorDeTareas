
// Importaciones de funciones
const { addTask, listTasks, removeTask, updateTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas antes de la actualización
listTasks();

// actualizacion de tareas
updateTask(1, "aprender a heredar en js");

// Listar nuevamente para verificar la actualización
listTasks();

removeTask(2);