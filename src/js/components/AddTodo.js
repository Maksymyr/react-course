import React from 'react';import {bindActionCreators} from 'redux';

// import {addTodo} from '../actions';
const addTodo = (payload) => ({type: "ADD_TODO", payload});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo}, dispatch);
}


import {connect} from 'react-redux';

@connect(null, mapDispatchToProps) 
export default class AddList extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask() {
        if (this.refs.inpTitle.value != "" && this.refs.inpDesc.value != "") {
        let vardata = {title: this.refs.inpTitle.value, description: this.refs.inpDesc.value, checkdone: false}
        this.props.addTodo(vardata);
        this.refs.inpTitle.value = "";
        this.refs.inpDesc.value = "";
        }
    }
    render() {
        return (
            <div className="add-todo">
                <input ref="inpTitle" type="text" placeholder="Title"/>
                <textarea ref="inpDesc" placeholder="Description"></textarea>
                <button onClick = {this.handleAddTask}>Add task</button>
            </div>
        )
    }
}