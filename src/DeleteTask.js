import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteTask({id, deleteTask}) {

    function handleDelete() {  
        fetch(`http://localhost:6001/tasks/${id}`,{
          method: "DELETE",
        })
        .then((r) => r.json())
        .then(deleteTask(id));
      }

    return(
        <IconButton onClick={handleDelete} aria-label="delete" className="delete">
            <DeleteIcon />
        </IconButton>
    )

}

export default DeleteTask;