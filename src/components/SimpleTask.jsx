import React, { useState } from 'react';
import TodoList from './TodoList';

const SimpleTask = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [uid, setUid] = useState();
    const [update, setUpdate] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleList = () => {
        setList((oldList) => {
            return [...oldList, input]
        });
        setInput("");
    }

    // const handleDelete = (id)=>{
    //     console.log("deleted" + id);
    //     setList((oldList)=>{
    //         return oldList.filter((item, index)=>{
    //             return index !== id;
    //         });
    //     });
    // }

    const handleDelete = (id) => {
        const filterList = list.filter((ele) => {
            return ele !== list[id]
        })
        setList(filterList)
    }

    const handleEdit = (id) => {
        const filterList = list.filter((ele) => {
            return ele === list[id]
        })
        setInput(filterList[0])
        setUid(id);
        setUpdate(true);
    }
    const handleUpdate = () => {
        list.splice(uid, 1, input);
        setInput('');
        setUpdate(false);
        
    }

    return (
        <div>
            <h2 className='text-center'>My Tasks</h2>
            <div>
                <div className='flex gap-2 text-center justify-center'>
                    <input type="text" placeholder='Enter Your Tasks' value={input} onChange={handleInput} className='border border-gray-400  outline-4 outline-blue-600 px-2 rounded-md' />
                    {/* <button onClick={handleList} className='bg-green-500 hover:bg-green-700 border-spacing-1 px-2 rounded-md text-white py-1'>Add Task</button>
                    <button onClick={handleUpdate} className='bg-purple-500 hover:bg-green-700 border-spacing-1 px-2 rounded-md text-white py-1'>Update Task</button> */}
                    {update ? <button onClick={handleUpdate} className='bg-purple-500 hover:bg-purple-700 border-spacing-1 px-2 rounded-md text-white py-1'>Update Task</button>: <button onClick={handleList} className='bg-green-500 hover:bg-green-700 border-spacing-1 px-2 rounded-md text-white py-1'>Add Task</button> }
                </div>
            </div>
            <div className='list text-center mt-5'>
                <ul>
                    {list.map((item, index) => {
                        return <TodoList key={index} id={index} data={item} onSelect={handleDelete} edit={handleEdit} update={handleUpdate} />
                    })}


                </ul>
            </div>
        </div>
    )
}

export default SimpleTask
