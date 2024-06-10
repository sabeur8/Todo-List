import { useState } from 'react';
import './App.css';
import './components/Todo';
import Todo from './components/Todo';

function App() {
  
  const [todos,setTodos] = useState(
    ['haircut', 'mearn javaScript', 'watch movie']
  );
  
  const deleteTodo = (item) => {

    const filtred = (element) =>(
      element != item
    )
    setTodos(
      (oldTodo) => {
        const filtredTodo = oldTodo.filter(filtred);
        setMappedTodo(filtredTodo.map(mapper));
        return filtredTodo;
      }
      
    );

  }
  
  const mapper = (element) => (
    <ul id="task-list">
    <Todo  data = {element} deleteTodo ={ deleteTodo } />
    </ul>
  )
  
  const [mappedTodo,setMappedTodo] = useState(todos.map(mapper));
  const [newTodo, setNewTodo] = useState('');
  
  const handleInput = (e) => {
    const newValue = e.target.value.trim();
    setNewTodo(newValue);
  }

  const handleAdd= () => {
    
      setTodos(
        (oldTodo) => {
        const x = oldTodo.concat([newTodo]);
        setMappedTodo(x.map(mapper));
        return x;
      });
      setNewTodo('');
      
  }
  
  return (
    <div className="todo-container">
      <h1> ToDo List <span>📝</span> </h1>
      
      {mappedTodo}
      <div class="input-section">

      <input  onChange={handleInput} type='text' id='task-input' placeholder='Add your task' value={newTodo} />
      <button id='add-task-btn' onClick={handleAdd}> + </button>
      </div>

    </div>
  );
  }
  
export default App;
