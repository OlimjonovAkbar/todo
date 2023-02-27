import React from 'react'
import Form from '../form/Form'
import List from '../list/List'
import './Main.scss'

export default function Main() {

    const todos = [
        {
            name: "Maktabga borish",
            watch:"17:00 - 17:30",
            status:true
        },
        {
            name: "Uyga kelish",
            watch:"17:00 - 17:30",
            status:true
        },
        {
            name: "Uxlash",
            watch:"17:00 - 17:30",
            status:true
        },
        {
            name: "Code yozish",
            watch:"17:00 - 17:30",
            status:true
        },
    ]
  
    return (
        <div className='Main rounded-3'>
            <h1 className='app-title text-center mb-4'>Todo App</h1>
            <Form todos={todos}/>
            <List todos={todos} />
        </div>
      )
}
