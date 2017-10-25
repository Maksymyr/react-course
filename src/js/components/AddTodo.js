import React from 'react';

export default class AddTodo extends React.Component {
    constructor (props) {
        super(props)
        this.handlePush = this.handlePush.bind(this);
    }
    handlePush() {
        if (this.refs.title.value.trim() != "" && this.refs.description.value.trim() != "") {
            this.props.handleAddTask(this.refs.title.value.trim(), this.refs.description.value.trim());
            this.refs.title.value = "";
            this.refs.description.value = "";
        }
    }
    render() {
        return (
            <div className='add-todo'>
                <input ref='title' type='text' placeholder='Title' />
                <textarea ref='description' placeholder='Description'></textarea>
                <button onClick={this.handlePush}>Add task</button>
            </div>
        )
    }

}