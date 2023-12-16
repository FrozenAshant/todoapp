import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from "react-icons/md";

const TodoList = (props) => {

  return (
    <div className='flex gap-x-1 justify-between w-1/2 m-auto px-4 border'>
      <li>{props.data}</li>
      <div className='flex '>
        <div className='text-purple-600 place-self-center' onClick={() => { props.edit(props.id) }}><MdEdit className='text-' /></div>
        <div className='text-red-600 place-self-center' onClick={() => { props.onSelect(props.id) }} ><MdDeleteOutline className='text-' /></div>
      </div>

    </div>
  )
}

export default TodoList
