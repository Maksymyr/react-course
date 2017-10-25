import React from 'react';

export default class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleUndoTask = this.handleUndoTask.bind(this);
        this.state = {
            checkundo: false
        }
    }
    handleDeleteTask() {
        this.props.funDel(this.props.index);
    }
    handleUndoTask() {
        this.setState({checkundo: !this.state.checkundo});
    }
    render() {
        return (
            <div className={this.state.checkundo ? 'item completed' : 'item'}>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
                <div className='buttons'>
                    <button onClick={this.handleUndoTask}>{this.state.checkundo ? 'Undo' : 'Done'}</button>   
                    <button onClick={this.handleDeleteTask}>Delete</button>   
                </div>
            </div>
        )
    }
}