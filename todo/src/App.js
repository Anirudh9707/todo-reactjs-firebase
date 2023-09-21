
import './App.css';
import { TextField,Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Todo } from './Components/Todo';
import { Collections } from '@mui/icons-material';
import { db } from './firebase';

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  useEffect(()=>{
    onsnapshot(collection(db,'todos'),snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data()))
    })
  },[input]);
  const addTodos=(e)=>{
      e.preventDefault();
      // setTodos([...todos,input])
      addDoc(collection(db,todos),{
        todo:input,
        timestamp:serverTimestamp(),
      })
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
