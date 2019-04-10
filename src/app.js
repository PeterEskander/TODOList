import React, { Component } from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            tasks: []
        };
    }


    componentDidMount() {
        this.getData();
    }



    getData(){
        axios.get('http://my-json-server.typicode.com/hpc3/project2JSONDB/tasks')
            .then(response =>{
                this.setState({tasks: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message });
        });
    }




    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                {/*<List items={this.state.items} />*/}
            </div>
        );
    }
}

export default App;