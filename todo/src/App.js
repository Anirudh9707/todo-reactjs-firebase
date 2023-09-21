
import './App.css';
import { TextField,Button } from '@mui/material';
import { useState } from 'react';
import { Todo } from './Components/Todo';

function App() {
  const [todos,setTodos]=useState(["react","firebase"]);
  const [input,setInput]=useState('');
  const addTodos=(e)=>{
      e.preventDefault();
      setTodos([...todos,input])
      setInput('')
  }
  
  return (
    <div className="App">
      <h2>REACT TODO APP</h2>
      <form>
      <TextField value={input} style={{margin:"5px 10px"}} onChange={e=>setInput(e.target.value)} size='small'>Add Task</TextField>
      <Button onClick={addTodos} color='primary' variant='contained'>Submit</Button>
      </form>
      <ul>
    <li>{todos.map(todo=><Todo todo={todo}></Todo>
      )}</li>
      </ul>
    </div>
  );
}

export default App;
