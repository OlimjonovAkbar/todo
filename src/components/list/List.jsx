import React from 'react'
import ListItem from './components/ListItem'
import './List.scss'

export default function List() {
  return (
    <ul className='p-0 todo-list'>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </ul>
  )
}
