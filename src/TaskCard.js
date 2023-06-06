import React from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ListItem } from 'semantic-ui-react';


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
            {isInEditMode ? <EditTask id={id} title={title} 
                updateTask={updateTask} 
                setIsInEditMode={setIsInEditMode} 
                isInEditMode={isInEditMode}
                /> :
            <div>
                <ListItemIcon>
                    <IconButton>
                        {checked ? <CheckBoxIcon onClick={handleCheck} checked={checked} type="checkbox"/> :
                            <CheckBoxOutlineBlankIcon onClick={handleCheck} checked={checked} type="checkbox"/>
                        }
                    </IconButton>
                <IconButton>
                    <span className={checked ? 'checked' : ''}><h4>{title}</h4></span>
                </IconButton>
                <IconButton onClick={handleEdit} className="edit">
                    <EditIcon onClick={handleEdit}/>
                </IconButton>
                <DeleteTask id={id} deleteTask={deleteTask}/>
                </ListItemIcon>
            </div>
            }
        </div>  
    )
}

export default TaskCard;