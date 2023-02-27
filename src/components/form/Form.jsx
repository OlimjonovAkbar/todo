import React from 'react'

export default function Form() {
  return (
    <form className='mb-5'>
      <input type="text" className='form-control mb-3' placeholder='Nima ish qilmoqchisiz ?' />
      <input type="text" className='form-control' placeholder='Soat nechidan nechigacha ?' />
      <input type="button" className='btn btn-primary w-50 mt-2' value={"Qo'shish"} />
    </form>
  )
}
