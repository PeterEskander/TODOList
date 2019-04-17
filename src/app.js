import React, { Component } from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import TaskList from './TaskList';
import AddTask from './AddTask';
//import TaskBoard from './TaskBoard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            tasks: []
        };
    }

    onUpdateTaskList = (newTaskList) => {
        this.setState({tasks: newTaskList});
    }

    componentDidMount() {
        this.getData();
    }


    getData() {
        axios.get('http://my-json-server.typicode.com/hpc3/project2JSONDB/tasks')
            .then(response => {
                this.setState({tasks: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }


    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }
    onViewChange(view) {
        this.setState({ view });
    }
    render() {
        const {view} = this.state;

        switch (view) {
            case 'TaskList':
                return (this.wrapPage(
                    <TaskList tasks={this.state.tasks} />
                ));
            /*case 'TaskBoard':
                return (this.wrapPage(
                    <TaskBoard/>
                ));*/
            case 'AddTask':
                return (this.wrapPage(
                    <AddTask/>
                ));
            default:
                return (this.wrapPage(
                    <h2>Invalid Tab, choose another</h2>
                ));
        }
    }
}

export default App;