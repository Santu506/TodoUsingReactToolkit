import './App.css'
import AddTodo from './components/addTodo.jsx'
import Todo from './components/Todo.jsx'

function App() {

  return (
    <>
      <h1 className='text-orange-900 text-3xl'>TodoApp</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
