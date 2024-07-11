import { useState } from 'react';
import './App.css'


const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')


  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Primeira tarefa',
      description: 'Descricao da primeira tarefa'
    },
    {
      id: 2,
      title: 'Segunda tarefa',
      description: 'Descricao da segunda tarefa'
    },
    {
      id: 3,
      title: 'Terceira tarefa',
      description: 'Descricao da terceira tarefa'
    }
  ])

function hendleAddNewTodo(event) {
  event.preventDefault()


  setTodos((state) => {
    const newTodo = {
      title: inputValue,
      description: textareaValue
    }
    return [ ...todos, newTodo]
  })

  setInputValue('')
  setTextareaValue('')
}

function hendleRemoveTodo(id) {
  const newTodoList = todos.filter((todo) => todo.id !== id)
  setTodos(newTodoList)
}
  return (  
    <>
    <header>
      <h1>ToDo List</h1>
    </header>



    <main>
      <div>
        <form onSubmit={hendleAddNewTodo} >
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Adicionar um titulo" 
            className='todo-input' />
            <textarea value={textareaValue} onChange={(event) => setTextareaValue(event.target.value)} type="text" placeholder="Adicionar um titulo"  
            className='todo-textarea' />
            <button type='submit'>Adicionar</button>
        </form>
      </div>
      <div className='todo-list-container'>
        {todos?.map((todo, index) => (
          <div key ={index}>
            <input type="checkbox" id={todo.title} onClick={() => hendleRemoveTodo(todo.id)}/>
            <label htmlFor={todo.title}>{todo.title}</label>
            <p>{todo.description}</p>
          </div>
         ))}
      </div>
    </main>


    <footer>
      <p>&copy; Todos os direitos reservados</p>
    </footer>
   
    </>
  );
}
 
export default App;