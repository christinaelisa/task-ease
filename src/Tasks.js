import TaskCard from "./TaskCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

function Tasks({allTasks, deleteTask, updateTask, setAllTasks}){

        const taskList = allTasks.map((task) => 
            <ListItem divider>
              <TaskCard 
                id={task.id}
                title={task.title} 
                allTasks={allTasks}
                deleteTask={deleteTask}
                setAllTasks={setAllTasks}
                updateTask={updateTask}
            />
           </ListItem>
    );

    return(
        <div className="taskbox">
            <List>
                {taskList}
            </List>
        </div>
    )
}

export default Tasks;