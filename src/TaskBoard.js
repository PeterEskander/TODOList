import React from 'react';

import './PageTabs.css';

class TaskBoard extends React.Component {

    getColumnList(column) {
        return this.props.tasks.filter(
            function (task) {
                return task.column==column;
            }
        )
    }

todoCards = this.getColumnList("todo").map(task => {
   return (<li>{task.title}</li>);
})

    inProgress = this.getColumnList("in-progress").map(task => {
        return (<li>{task.title}</li>);
    })

    review = this.getColumnList("review").map(task => {
        return (<li>{task.title}</li>);
    })

    done = this.getColumnList("done").map(task => {
        return (<li>{task.title}</li>);
    })

    render() {
        return (<div class="board">
            <div class="todo">
                <h1>ToDo</h1>
            <ul>
                {this.todoCards}
            </ul>
            </div>
            <div class="progress">
                <h1>In Progress</h1>
                <ul>
                    {this.inProgress}
                </ul>
            </div>
            <div class="review">
                <h1>Review</h1>
                <ul>
                    {this.review}
                </ul>
            </div>
            <div class="done">
                <h1>Done</h1>
                <ul>
                    {this.done}
                </ul>
            </div>
            </div>)
    }



};


export default TaskBoard