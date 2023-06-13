import React from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function TaskCard ({id, title, deleteTask, updateTask, allTasks, setAllTasks}) {

    const [isInEditMode, setIsInEditMode] = useState(false);
    const [checked, setChecked] = useState(false);
  
    function handleCheck(){
        setChecked(!checked);
        const checkedTasks = allTasks.map((task) => {
            if (task.id === id) {
                return {...task, checked: !checked}
            } else {
                return task;
            }
        })
        setAllTasks(checkedTasks);
        console.log(checkedTasks);
    }

    function handleEdit(e){
        e.preventDefault();
        setIsInEditMode(!isInEditMode);
    }

    return(
        <div key={id}>
            <br></br>
            {isInEditMode ? 
                <EditTask id={id} title={title} 
                updateTask={updateTask} 
                setIsInEditMode={setIsInEditMode} 
                isInEditMode={isInEditMode}/>
                 :
            <div className="taskrow">
                <IconButton>
                    {checked ? <CheckBoxIcon onClick={handleCheck} checked={checked} type="checkbox"/> : 
                        <CheckBoxOutlineBlankIcon onClick={handleCheck} checked={checked} type="checkbox"/>}
                </IconButton>
                    <div>
                        <span className={checked ? 'checked' : ''}><h4>{title}</h4></span>
                    </div>
                <IconButton onClick={handleEdit} className="edit">
                    <EditIcon/>
                </IconButton>
                <DeleteTask id={id} deleteTask={deleteTask}/>
            </div>
            }
        </div>  
    )
}

export default TaskCard;