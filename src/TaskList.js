import React from 'react';

import TaskItem from './TaskItem';

import './styleCasey.css';


class TaskList extends React.Component {


  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id}/>
    });

    return (

        <table align="center" className="tableStyling">
          <tbody>
          <tr align="center" className="labelRowStyle">
            <td className="tableDataLabel">Sort</td>
            <td className="tableDataLabel">Status</td>
            <td className="tableDataLabel">Type</td>
          </tr>
          </tbody>
          <tbody>
          <tr align="center" className="selectRowStyle">
            <td className="tableDataSelect">
              <select className="selectStyle">
                <option>Title</option>
                <option>Status</option>
                <option>Type</option>
              </select >
            </td>
            <td className="tableDataSelect">
              <select className="selectStyle">
                <option>Select Status</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Done</option>
              </select>
            </td>
            <td className="tableDataSelect" >
              <select className="selectStyle">
                <option>Select Type</option>
                <option>Chore</option>
                <option>Rest</option>
                <option>School Work</option>
              </select>
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <th align="left" className="tableHeadingStyling">Task</th>
            <th align="center" className="tableHeadingStyling">Status</th>
            <th align="right" className="tableHeadingStyling">Type</th>
          </tr>
          </tbody>

          {taskItems}
        </table>
    )
  }
}

export default TaskList;