import React from 'react';
import {connect} from 'react-redux';

import AddItem from './AddItem.js';

const mapStateToProps = (state, ownProps) => {

    return {tasks: state.todos.data};
}

@connect(mapStateToProps)
export default class AddList extends React.Component {
    
    render() {

        return (
            <div className="todo-list">
                {this.props.tasks.map((item, index) => <AddItem task={item} index= {index} key={index}/>)}
            </div>
        )
    }
}