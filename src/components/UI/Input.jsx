import React from 'react'

function Input({label,id}) {
  return (
    <p className='control'>
          <label htmlFor={id}>{label}</label>
          <input id = {id} name = {id} required></input>
    </p>
  )
}

export default Input
