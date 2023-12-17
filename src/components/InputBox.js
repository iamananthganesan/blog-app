import React from 'react'

const InputBox = ({type,setName,placeholder }) => {
  return (
    <input className='formControl' type={type} onChange={(e) => { console.log(e);setName(e.target.value) }} placeholder={placeholder}/>
  )
}

export default InputBox
