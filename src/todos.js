
var { uuid } = require('uuidv4')
// Setup the empty todos array
let todos = []
// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
     localStorage.getItem('todos')

     try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}
// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
}
// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => {
    return todos
}
// createTodo
// Arguments: todo text then calls save todo
// Return value: none
const createTodo =  (text) => {
   todos.push({
       id: uuid(),
       text,
       completed: false
   })
    saveTodos()
}
// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex >= -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    } 
}
// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const todo = todos.find( (todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed  
      saveTodos()
    }
    console.log('YOU FIXED YOUR FIRST REAL BUG!')
}
// Make sure to call loadTodos and setup the exports
loadTodos()

export {getTodos, saveTodos,  createTodo, removeTodo, toggleTodo, loadTodos }
