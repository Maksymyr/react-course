import React from 'react';

import {Link} from 'react-router-dom';

import AddTodo from '../components/AddTodo.js';

export default class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleUndoTask = this.handleUndoTask.bind(this);
        this.handleViewTask = this.handleViewTask.bind(this);
        this.state = {
            checkundo: false
        }
    }
    handleDeleteTask() {
        this.props.funDel(this.props.index);
    }
    handleUndoTask() {
        // this.props.funUndo(this.props.index);
        this.setState({checkundo: !this.state.checkundo});
    }
    handleViewTask() {
        this.props.funView(this.props.index);
    }
    render() {
        return (
            <div className={this.state.checkundo ? 'item completed' : 'item'}>
                <h2><span>{this.props.data.title}</span></h2>
                <p><span>{this.props.data.description}</span></p>
                <div className='buttons'>
                    <button onClick={this.handleUndoTask}>{this.state.checkundo ? 'Undo' : 'Done'}</button>   
                    <button onClick={this.handleDeleteTask}>Delete</button>   
                    <button onClick={this.handleViewTask}><Link to={'/item' + (this.props.index + 1)}>View</Link></button>   
                </div>
            </div>
        )
    }
}