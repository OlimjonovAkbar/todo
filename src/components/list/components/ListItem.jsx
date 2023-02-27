import React from 'react'
import '../List.scss'

export default function ListItem() {
  return (
    <li className='bg-dark-subtle px-3 py-3 fs-4 d-flex mb-3 align-items-center justify-content-between rounded-3'>
        Akbarshox 
        <span className='fs-6 text-secondary'>17:00 - 17:30</span> 
        <span className='status status-activate rounded-circle bg-danger'></span>
    </li>
  )
}
