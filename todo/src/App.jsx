import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import {collection,onSnapshot,serverTimestamp,query,orderBy,
  addDoc} from 'firebase/firestore';
const q=query(collection(db,'todo'),orderBy('timestamp','desc'))
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setinput]=useState("");
  useEffect(()=>{
    onSnapshot(q,(snapshot)=>{
      setTodos(snapshot.docs.map(doc=>({
  id:doc.id,
  item: doc.data()

      })))
    })
    },[input]);
  
  const addTodo=(e)=>{
    e.preventDefault();
    addDoc(collection(db,'todo'),{
      todo:input,
      timestamp:serverTimestamp(),
    });
    setinput("");
  }
  return (
    <>
      <div className='App'>
        <h1 >Todo List App</h1>
        <form>
          <TextField id="outlined-basic" label="todo" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input} onChange={(e)=>setinput(e.target.value)}/>
          <Button variant="contained" color="primary" onClick={(e)=>addTodo(e)}>Add Todo</Button>
          
        </form>
        <ul>
          {todos.map(arr=><li><Todo arr={arr} key={arr.id}/></li>)}
        </ul>
      </div>
    </>
  )
}

export default App
