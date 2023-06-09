import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

function EditTask({id, title, updateTask, isInEditMode, setIsInEditMode}){

    const [editedTask, setEditedTask] = useState(title);

    function submitEdit(e){
        e.preventDefault();
        console.log(editedTask);
        setIsInEditMode(!isInEditMode);

        const data = {
            id: id,
            title: editedTask
        }

        fetch(`http://localhost:6001/tasks/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((r) => r.json())
        .then((data) => updateTask(data));
    }

    return(
        <div>   
            <form onSubmit={submitEdit}>
                <TextField 
                    type="text"
                    class="input"
                    placeholder="Edit task..."
                    value={editedTask}
                    required={true}
                    onChange={(e) => setEditedTask(e.target.value)}
                    />
                <Button type="submit">Save</Button>
            </form >
        </div>
    )
}

export default EditTask;