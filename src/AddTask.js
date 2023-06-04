import React from 'react';
import { Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function AddTask ({handleSubmit, handleChange, newTask}) {

    return(
        <div >
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="text" 
                    placeholder="Add task..." 
                    onChange = {handleChange} 
                    value={newTask} 
                    required={true}
                    autoComplete="off"
                />
                <Fab size="small" type="submit">
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default AddTask;