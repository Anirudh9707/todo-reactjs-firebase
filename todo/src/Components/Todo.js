import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

export function Todo({todo}) {
  return (
    <div>
  <List className='todo__list'>
    <ListItem>
      <ListItemAvatar></ListItemAvatar>
      <ListItemText primary={todo} secondary={todo}></ListItemText>
    </ListItem>

  </List>

    </div>
  )
}
