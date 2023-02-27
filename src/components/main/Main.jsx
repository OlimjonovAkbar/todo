import React from 'react'
import Form from '../form/Form'
import List from '../list/List'
import './Main.scss'

export default function Main() {
  return (
    <div className='Main rounded-3'>
        <h1 className='app-title text-center mb-4'>Todo App</h1>
        <Form/>
        <List/>
    </div>
  )
}
