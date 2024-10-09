import React, {useState} from 'react';
import style from './index.css';
function ToDoList(){

    const[tasks,setTasks] = useState([]);
    const[newTask,setNewTask]=useState(" ");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !==""){
        setTasks([...tasks,newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i) => i !== index); //here element is not used and we can use _ there
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <>
        <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text"
            placeholder='Enter a Task'
            value={newTask}
            onChange={handleInputChange}
             />


        <button
        className='add-button'
        onClick={addTask}
        >Add</button>
        </div>

        
        <ol>
            {tasks.map((task ,index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                     className='delete-button'
                    onClick={() => deleteTask(index)}
                    >Delete</button>
                     <button
                     className='moveup-button'
                    onClick={() => moveTaskUp(index)}
                    >Up</button>
                     <button
                     className='movedown-button'
                    onClick={() => moveTaskDown(index)}
                    >Down</button>
                </li>
            )}
        </ol>
        </div>
        </>

    );
}

export default ToDoList;