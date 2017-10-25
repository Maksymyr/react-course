import React from 'react';

import AddTodo from '../components/AddTodo.js';
import AddList from '../components/AddList.js';
import AddItem from '../components/AddItem.js'

export default class MainLayout extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.state = {
            data: []
        }
    }
    handleAddTask(header, text) {
        this.setState({data: [...this.state.data, {title: header, description: text}]})

    }   
    handleDeleteTask(delIndex) {
        this.setState({data: this.state.data.filter((item, index) => index != delIndex)})
    }
    render() {
        console.log(this.state.data);
        return (
            <div className="wrapper">
                <h1>My todo list!</h1>
                <AddTodo handleAddTask={this.handleAddTask} />
                <AddList>
                    {this.state.data.map((item, index) => 
                    <AddItem data={item} index={index} key={index} funDel={this.handleDeleteTask} />
                    )}
                </AddList>


            </div>
        )
    }
}

