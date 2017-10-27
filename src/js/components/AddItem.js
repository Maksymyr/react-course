import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import {addTodo} from '../actions';
const delTask = (index) => ({type: "DELETE", index});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({delTask}, dispatch);
}

const mapStateToProps = (state, ownProps) => {

    return {tasks: state.todos.data};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AddItem extends React.Component {
    constructor (props)
{
    super(props);

}
    handleDelete = () => {
        this.props.delTask(this.props.index);
    }
    render() {
        // console.log(this.props.tasks);
        return (
            <div className="item">
                <h2>{this.props.task.title}</h2>
                <p>{this.props.task.description}</p>
                <button>Done</button>
                <button onClick = {this.handleDelete}>Delete</button>
                <button>View</button>
            </div>
        )
    }
}