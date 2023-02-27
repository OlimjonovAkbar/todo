import React from 'react'
import '../List.scss'

export default function ListItem({name, watch, status}) {
  return (
    <li className='bg-dark-subtle px-3 py-3 fs-4 d-flex mb-3 align-items-center justify-content-between rounded-3'>
        {name} 
        <span className='fs-6 text-secondary'>{watch}</span> 
        {status ? <span className='status status-activate rounded-circle bg-primary'></span> : <span className='status status-activate rounded-circle bg-danger'></span>}
            
    </li>
  )
}
