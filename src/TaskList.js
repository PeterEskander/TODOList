import React from 'react';

import TaskItem from './TaskItem';

import './styleCasey.css';

import './FilterSelector';
import FilterSelector from "./FilterSelector";


class TaskList extends React.Component {


    mainSort = (typeOfSort) => {
        if (typeOfSort === 'Title'){
            this.props.tasks.map((a,b) => {
                             if(a.tasks.props.title.toLowerCase() < b.tasks.props.title.toLowerCase()) return -1;
                             if(a.tasks.props.title.toLowerCase() > b.tasks.title.toLowerCase()) return 1;
                             return 0;
                     });
        }
        if (typeOfSort === 'Type'){
            this.props.tasks.map((a,b) => {
                         if(a.tasks.props.type.toLowerCase() < b.tasks.props.type.toLowerCase()) return -1;
                         if(a.tasks.props.type.toLowerCase() > b.tasks.props.type.toLowerCase()) return 1;
                         return 0;
                 })
        }
        if (typeOfSort === 'Status'){
             this.props.tasks.map((a,b) => {
                             if(a.tasks.props.column.toLowerCase() < b.tasks.props.column.toLowerCase()) return -1;
                             if(a.tasks.props.column.toLowerCase() > b.tasks.props.column.toLowerCase()) return 1;
                             return 0;
                     })
        }
    }


    filterByType = (type) => {
        if (type === "Chore") {
            this.props.tasks.filter((chore) => {
                return this.props.tasks.type === "chore";
            })
        }
        if (type === "Rest") {
            this.props.tasks.filter((rest) => {
                return this.props.tasks.type === "rest";
            })
        }
        if (type === "School Work") {
            this.props.tasks.filter((sw) => {
                return this.props.tasks.type === "school work";
            })
        }
    }

    filterByStatus = (status) => {
        if (status === "ToDo") {
            this.props.tasks.filter((todo) => {
                return this.props.tasks.type === "chore";
            })
        }
        if (status === "In Progress") {
            this.props.tasks.filter((inprog) => {
                return this.props.tasks.type === "In Progress";
            })
        }
        if (status === "Review") {
            this.props.tasks.filter((review) => {
                return this.props.tasks.type === "Review";

            })
        }
        if (status === "Done") {
            this.props.tasks.filter((done) => {
                return this.props.tasks.type === "Done";

            })
        }
    }


  render() {
      console.log("right below here");
     console.log(this.props.tasks);
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id}/>
    });



    return (

        <table align="center" className="tableStyling">
          <tbody>
          <tr align="center" className="labelRowStyle">
            <td className="tableDataLabel">Sort</td>
            <td className="tableDataLabel">Type</td>
            <td className="tableDataLabel">Status</td>
          </tr>
          </tbody>
          <tbody>
          <tr align="center" className="selectRowStyle">
            <td className="tableDataSelect">
              <select className="selectStyle">
                <option>Select A Sort Method</option>
                <FilterSelector filterlabel='Title' /*onClick={this.mainSort("Title")} *//>
                <FilterSelector filterlabel='Type' /*onClick={this.mainSort("Type")}*//>
                <FilterSelector filterlabel='Status' /*onClick={this.mainSort("Status")} *//>
              </select>
            </td>
            <td className="tableDataSelect">
              <select className="selectStyle">
                  <option>Select Type</option>
                  <FilterSelector filterlabel='Chore' /*onClick={this.filterByType("Chore")} *//>
                  <FilterSelector filterlabel='Rest' /*onClick={this.filterByType("Rest")} *//>
                  <FilterSelector filterlabel='School Work' /*onClick={this.filterByType("School Work")} *//>
              </select>
            </td>
            <td className="tableDataSelect" >
              <select className="selectStyle">
                  <option>Select Status</option>
                  <FilterSelector filterlabel='To Do' /*onClick={this.filterByStatus("ToDo")} *//>
                  <FilterSelector filterlabel='In Progress' /*onClick={this.filterByStatus("In Progress")} *//>
                  <FilterSelector filterlabel='Review' /*onClick={this.filterByStatus("Review")} *//>
                  <FilterSelector filterlabel='Done' /*onClick={this.filterByStatus("Done")} *//>
              </select>
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <th align="left" className="tableHeadingStyling">Task</th>
            <th align="center" className="tableHeadingStyling">Type</th>
            <th align="right" className="tableHeadingStyling">Status</th>
          </tr>
          </tbody>

          {taskItems}
        </table>
    )
  }
}




export default TaskList;