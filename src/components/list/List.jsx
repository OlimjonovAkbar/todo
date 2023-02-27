import React from 'react'
import ListItem from './components/ListItem'
import './List.scss'

export default function List({todos}) {
  return (
    <ul className='p-0 todo-list'>
      {
        todos.map((el,index) => (
          <ListItem key={index} name={el.name} watch={el.watch} status={el.status}/>
        ))
      }
    </ul>

  )
}
