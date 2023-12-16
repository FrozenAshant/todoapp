import React, {useState} from 'react';

const Form = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    
    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit= e =>{
        e.preventDefault();
    }

    const handleTask = e =>{
        setList([...list, input])
    }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 justify-center mt-3'>
      <input type="text" placeholder='Add Todo'value={input} name='text' onChange={(e)=>{handleInput(e)}} className='border px-2 outline-blue-400' />
      <button className='border px-2 py-1 text-white bg-green-500 hover:bg-green-600 rounded-md'>Add Task</button>
    </form>
  )
}

export default Form
