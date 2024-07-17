'use client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const TodoList = () => {

    // const [num, setNum] = useState(10);

    const [taskList, setTaskList] = useState([]);
    console.log(taskList);
    const addTask = (e) => {

        if (e.code === 'Enter') {

            if (!e.target.value) {
                alert('Enter a value to add');
                return;
            }

            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false, createdAt: new Date() };

            setTaskList([...taskList, newTask]);

            e.target.value = '';
            toast.success('New Task Added Successfully');
        }
    };

    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
        toast.success('Task Deleted Successfully');
    }

    const toggleComplete = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
    }

    return (
        <div className='max-w-[80%] mx-auto'>
            {/* {num} */}
            {/* <button onClick={() => { setNum(num + 1); console.log(num); }}>add number</button> */}
            <h1 className='text-5xl font-bold text-center'>ToDo List</h1>

            <div className='border-2 rounded-md shadow mt-5'>
                <div className='border-b-2 border-gray-600 p-4'>
                    <input
                        placeholder='Add a new task'
                        className='border-2 border-blue-500 rounded p-3 w-full'
                        type="text"
                        onKeyDown={addTask}
                    />
                </div>

                <div className='p-5'>
                    {
                        taskList.map((task, index) => {
                            return <div key={index} className='shadow-md border-2 rounded-lg p-4 mb-5'>
                                {task.completed ? (
                                    <p className='text-sm bg-green-500 px-3 w-fit rounded-full text-white'>Complete</p>
                                ) : (
                                    <p className='text-sm bg-yellow-500 px-3 w-fit rounded-full text-white'>Pending</p>
                                )}
                                <p className={task.completed ? 'line-through' : ''}>{task.text}</p>
                                <div className='mt-3 flex gap-3 justify-end'>
                                    <button
                                        onClick={() => { toggleComplete(index) }}
                                        className='bg-blue-500 px-3 text-white rounded-full'>Edit</button>

                                    <button
                                        onClick={() => { deleteTask(index) }}
                                        className='bg-red-500 px-3 text-white rounded-full'>Delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;