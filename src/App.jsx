import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect } from "react"


function App() {
  // const todos = [
  //   {
  //     input: "hello ",
  //     completed: false,
  //   },
  //   {
  //     input: "hi",
  //     completed: true,
  //   },
  //   {
  //     input: "hey",
  //     completed: false,
  //   },
  //   {
  //     input: "ola",
  //     completed: true,
  //   },
  //    {
  //     input: "hey",
  //     completed: false,
  //   },
  //   {
  //     input: "new task",
  //     completed: false,
  //   },
  // ]

  const [todos, setTodos] = useState([{
    input: "hello ",
    completed: true,
  },])

  const [selectedTab, setSelectedTab] = useState("Open")

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, completed: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
    
  }
  function handleCompleteTodo(index){
    // so atualizar
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo["completed"] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
    
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){  
    localStorage.setItem("todo-app", JSON.stringify({todos : currTodos})) 
 
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {return}
    console.log()
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList handleCompleteTodo = {handleCompleteTodo}  handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>

  )
}

export default App
