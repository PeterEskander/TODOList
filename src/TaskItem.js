import React from 'react';

import './styleCasey.css';



const TaskItem = props => {


  return (


      <tbody className="tableBodyStyle">
        <tr>
          <td className="titleStyle tableRowStyle g">{ props.task.title }</td>
          <td className="statusStyle tableRowStyle">{props.task.type}</td>
          <td className="typeStyle tableRowStyle">{props.task.column}</td>
        </tr>
      </tbody>

  )
};

export default TaskItem;