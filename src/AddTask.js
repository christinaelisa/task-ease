import React from 'react';

function AddTask ({handleSubmit, handleChange, newTask}) {

    return(
        <div>
            <form onSubmit={handleSubmit}>

            <div className="ui action input">
                <input 
                      type="text" 
                      placeholder="Add task..." 
                      onChange = {handleChange} 
                      value={newTask} 
                      required={true}
                      autoComplete="off"
                      maxLength="40"
                ></input>
            <button class="ui button" type="submit">Submit</button>
            </div>
            </form>
        </div>
    );
}

export default AddTask;