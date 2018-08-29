import React from 'react';

const Tasks = ({tasks, deleteTask }) =>{

    const taskList = tasks.length ? (
        tasks.map(tasks => {
            return(
                <div className="collection-item" key={tasks.id}>
                <span onClick={() => {deleteTask(tasks.id)}}> { tasks.task }</span>
                </div>
            )
        })
    ) : (
        <p className="center"> You don't have any tasks!!!</p>
    )

    return (
        <div className="tasks collection purple-text">
            {taskList}
        </div>
    )
}

export default Tasks;