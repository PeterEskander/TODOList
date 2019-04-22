import React from 'react';

class AddTask extends React.Component {
  state = { newTask: '', newType: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.newTask, this.state.newType);
    this.setState({ newTask: ' ', newType: ' '})

  }

  render() {
    return (
      <form className="task-input form-group" onSubmit={this.onFormSubmit}>
        <label htmlFor="newTask">Enter New Task</label>
        <input type="text" className="form-control"
               name="newTask"
               value={this.state.newTask}
               onChange={(e) => this.setState({ newTask: e.target.value })} />
        <label htmlFor="NewType">Enter The Tasks's type</label>
               <input type="text" className="from-control" name="newType" value={this.state.newType}
                      onChange={(e) => this.setState({ newType: e.target.value })} />

                      <input type="submit" />
      </form>
    );
  }
}

export default AddTask;