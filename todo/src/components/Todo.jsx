import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { doc,deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './todo.css';
 const Todo=({arr})=>{
    return(
<List className='todo_list'>
    <ListItem>
        <ListItemAvatar>
            <ListItemText primary={arr.item.todo} secondary={arr.item.todo}></ListItemText>
        </ListItemAvatar>
    </ListItem>
    <DeleteIcon fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {deleteDoc(doc(db,"todo",arr.id));}}/>
</List>

    )
}
export default Todo;